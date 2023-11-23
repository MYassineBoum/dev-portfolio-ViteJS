import React from 'react'

function ProjectCard(project: any) {
  return (
    <div className="project">
      <h2>{project.Title}</h2>
      <p>{project.Tools}</p>
      <p>{project.Date}</p>
    </div>
  )
}

export default ProjectCard