import React from 'react';
import "../styles/Projects.css"
import project1 from "../images/project1.png"
import project2 from "../images/project2.jpeg"
import project3 from "../images/project3.png"
import project4 from "../images/project4.png"

const Project = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: 'MovieLand',
      description: 'Simple Netflix clone with basic react features like states and hooks by using OMDB movie database api.',
      url:"https://github.com/RahulSelvakumar/MovieLand"
    },
    {
      id: 2,
      image: project2,
      title: 'Weather Forecast Application',
      description: "weather forecast application using React and the Context API for state management. It integrates a weather API to retrieve accurate weather data for the user's desired location.",
      url:"https://github.com/RahulSelvakumar/weather_forecast"
    },
    {
      id: 3,
      image: project3,
      title: 'URL Shortener',
      description: 'Built with Node.js, Express.js, and MongoDB. It generates shortened URLs for long ones, stores the mappings in MongoDB, and handles redirection efficiently.',
      url:"https://github.com/RahulSelvakumar/URL-Shortener"
    },
    {
      id: 4,
      image: project4,
      title: 'Tic Tac Toe',
      description: 'The React.js Tic-Tac-Toe app is a sleek, user-friendly version of the classic game. Play against friends on a 3x3 grid, with real-time updates and intuitive controls',
      url:"https://github.com/RahulSelvakumar/tic_tac_toe"
    },
  ];

  return (
    <section className="project-section" >
      <div className="grid-container" id="project">
        {projects.map((project) => (
          <div key={project.id} className="project-grid">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
