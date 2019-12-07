import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import ActionList from './ActionList';

const ProjectDetail = props => {
    const [project, setProject] = useState([]);
    const id = props.match.params.id;
    
    useEffect(() => {
        axios.get(`http://localhost:4000/api/projects/${id}`)
            .then(response => {
                console.log('Project', response)
                setProject(response.data.project);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return(
        <div>
            <ProjectCard project={project} />
            <ActionList routeId={id}/>
        </div>
    )
}

export default ProjectDetail;