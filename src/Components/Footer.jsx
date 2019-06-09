import React from 'react';
import PropTypes from 'prop-types';
import '../styles/footer.scss';


const Footer = (props) => {
  const { animate } = props;
  return (
    <footer className={animate ? 'animate' : ''}>
      <p>
        Get in touch on
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Shavrin"
        >
          Github
        </a>
        {' '}
          and
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kacper-olek-987a518b/"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

Footer.propTypes = {
  animate: PropTypes.bool.isRequired,
};

export default Footer;
