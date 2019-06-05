import React from 'react';
import '../styles/project.scss';

const Project = (props) => {
    return (
        <div className="project">
            <img src={props.imageURL} alt="Project" />
            <h2 className="title">{props.title}</h2>
            <div className="description">{props.description}</div>
            <div className="links">
                <a href={props.githubLink}>
                    <img src="./GitHub_Logo.png" alt="Github" />
                </a>
                <a href={props.livePageLink}>
                    <img src="./link.png" alt="Live Page" />
                </a>
            </div>
        </div>);
}

export default Project;