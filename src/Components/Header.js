import React from 'react';
import '../styles/header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'aboutExpanded': false };
    };

    toggleAbout() {
        this.setState({ 'aboutExpanded': !this.state.aboutExpanded });
    };

    render() {
        return (
            <header>
                <h1>Kacper Olek</h1>
                <p>Web Developer</p>
                <p className="aboutMe" onClick={this.toggleAbout.bind(this)}>About me</p>
                <div className={"line" + (this.props.animate ? " animate" : "")}></div>
                <div className={'aboutMeSection' + (this.state.aboutExpanded ? ' expanded' : "")}>
                    <p>Hi, I'm Kacper!</p>
                    <p>I'm a Web Developer!</p>
                    <p>I'm an IT engineer!</p>
                    <p>I love programming!</p>
                </div>
            </header >);
    };
};

export default Header;