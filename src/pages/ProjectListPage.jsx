// src/pages/ProjectListPage.jsx

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { get } from "../services/authService";

import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";

// const API_URL = "http://localhost:4000";


function ProjectListPage() {

  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    get('/projects')
      .then((response) => {
        console.log("All Projects", response.data)
        setProjects(response.data)
    })
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {

    getAllProjects();

  }, [] );

  
  return (
    <div className="ProjectListPage">

        <AddProject refreshProjects={getAllProjects} setProjects={setProjects} projects={projects} />
      
        {projects.map((project) => {
          return (
            <ProjectCard key={project._id} {...project} />
          );
        })}     
       
    </div>
  );
}

export default ProjectListPage;
