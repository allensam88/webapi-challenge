import React from 'react';

const ProjectCard = props => {

    return(
        <div className='project-card'>
            <h2>{props.project.name}</h2>
            <p>Description: {props.project.description}</p>
        </div>
    )
}

export default ProjectCard;