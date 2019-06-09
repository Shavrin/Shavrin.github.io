import React from 'react';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animationStart: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animationStart: true });
    }, 250);
  }

  render() {
    const { animationStart } = this.state;
    return (
      <div>
        <Header animate={animationStart} />
        <Projects />
        <Footer animate={animationStart} />
      </div>
    );
  }
}

export default App;
