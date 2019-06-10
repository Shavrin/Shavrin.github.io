import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aboutExpanded: false };
  }

  toggleAbout() {
    const { aboutExpanded } = this.state;
    this.setState({ aboutExpanded: !aboutExpanded });
  }

  render() {
    const { aboutExpanded } = this.state;
    const { animate } = this.props;
    return (
      <header>
        <h1>Kacper Olek&apos;s Portfolio</h1>
        <p>Web Developer</p>
        <button type="button" className="aboutMe" onClick={this.toggleAbout.bind(this)}>
                    About me
          {aboutExpanded ? <>&uarr;</> : <>&darr;</>}
        </button>
        <div className={`line${animate ? ' animate' : ''}`} />
        <div className={`aboutMeSection${aboutExpanded ? ' expanded' : ''}`}>
          <p>Hi, I&apos;m Kacper!</p>
          <p>I&apos;m a Web Developer!</p>
          <p>I&apos;m an IT engineer!</p>
          <p>I love programming!</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  animate: PropTypes.bool.isRequired,
};

export default Header;
