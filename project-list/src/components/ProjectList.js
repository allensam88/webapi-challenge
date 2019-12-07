import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/projects`)
            .then(response => {
                console.log(response)
                setProjects(response.data.projects);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <div className="project-list">
            {projects.map((project) => {
                return <ProjectCard key={project.id} project={project} />
            })}
        </div>
    );
}

export default ProjectList;