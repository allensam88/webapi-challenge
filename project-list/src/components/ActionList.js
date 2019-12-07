import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ActionCard from './ActionCard';

const ActionList = props => {
    const [actions, setActions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/projects/${props.routeId}/actions`)
            .then(response => {
                console.log('Actions', response)
                setActions(response.data.projectActions);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <div>
            {actions.map((action) => {
                return <ActionCard key={action.id} action={action} />
            })}
        </div>
    )
}

export default ActionList;