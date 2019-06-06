import React from 'react';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 'animateLine': false };
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ 'animateLine': true });
        }, 250);
    };

    render() {
        return (
            <div>
                <Header animateLine={this.state.animateLine} />
                <Projects />
                <Footer />
            </div>);
    };
};

export default App;