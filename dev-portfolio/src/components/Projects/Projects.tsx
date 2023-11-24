import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

function Projects() {
  const [projects, setProjects] = useState([]);

  const getData=()=>{
    fetch('MyProjects.json')
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setProjects(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <>
      <h2>Here, you can find some of my projects.</h2>
      {projects?.length > 0 ? (
      <div className='projects'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      ) : (
        <div className="empty">
          <h2>This section is empty!</h2>
        </div>
      )}
    </>
  )
}

export default Projects