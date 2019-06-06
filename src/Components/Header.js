import React from 'react';
import '../styles/header.scss';

const Header = (props) => {
    return (
        <header>
            <h1>Kacper Olek</h1>
            <p className="aboutMe">Web Developer</p>
            <div className={"line" + (props.animate ? " animate" : "")}></div>
        </header>);
};

export default Header;