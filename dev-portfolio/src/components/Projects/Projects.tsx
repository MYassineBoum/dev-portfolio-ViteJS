import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const [projects, setProjects] = useState([]);

function Projects() {
  return (
    <>
      <h2>Here, you can find some of my projects.</h2>
      <div className='projects'>
        {projects.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </div>
    </>
  )
}

export default Projects