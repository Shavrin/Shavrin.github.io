import React from 'react';
import PropTypes from 'prop-types';
import '../styles/project.scss';

const Project = (props) => {
  const {
    imageURL, title, description, githubLink, livePageLink,
  } = props;
  return (
    <div className="project">
      <img src={imageURL} alt="Project" />
      <h2 className="title">{title}</h2>
      <div className="description">{description}</div>
      <div className="links">
        <a href={githubLink}>
          <img src="./GitHub_Logo.png" alt="Github" />
        </a>
        <a href={livePageLink}>
          <img src="./link.png" alt="Live Page" />
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  livePageLink: PropTypes.string.isRequired,
};

export default Project;
