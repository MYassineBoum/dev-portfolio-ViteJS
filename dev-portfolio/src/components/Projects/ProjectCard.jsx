import React from 'react'

function ProjectCard({project}) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.tools}</p>
      <p>{project.date}</p>
    </div>
  )
}

export default ProjectCard