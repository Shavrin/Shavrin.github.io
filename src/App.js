import React from 'react';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Projects />
                <Footer />
            </div>);
    };
};

export default App;