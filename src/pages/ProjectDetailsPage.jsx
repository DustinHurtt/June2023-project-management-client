// src/pages/ProjectDetailsPage.jsx

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";
import { get } from "../services/authService";


function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);

  const { projectId } = useParams();

  const getProject = () => {          //  <== ADD A NEW FUNCTION
    get(`/projects/project-details/${projectId}`)
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProject()
  }, [])

  
  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

        <AddTask refreshProject={getProject} projectId={projectId} setProject={setProject} />

      {project &&
        project.tasks.map((task) => (
            <TaskCard key={task._id} {...task} />
      ))}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>  
    </div>
  );
}

export default ProjectDetailsPage;
