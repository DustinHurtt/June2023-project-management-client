// src/components/AddTask.jsx

import { useState } from "react";

import { post } from "../services/authService";

function AddTask({ refreshProject, projectId, setProject}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
  const handleSubmit = (e) => {

    e.preventDefault();
 
    // We need the project id when creating the new task

    // Create an object representing the body of the POST request
    const requestBody = { title, description, projectId };
 
    post('/tasks', requestBody)
      .then((response) => {
        console.log("New task", response.data)
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
      
        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        // refreshProject();
        setProject(response.data)
      })
      .catch((error) => console.log(error));

  };

  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
