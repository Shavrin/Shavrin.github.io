import React from 'react';

const Project = (props) => {
    return (
        <div className="project">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>);
};

export default Project;