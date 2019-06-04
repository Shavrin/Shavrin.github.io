import React from 'react';

class Skill extends React.Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
        this.state = {
            isInViewport: false,
            eventAttached: false
        };
        this.checkIfInViewport = this.checkIfInViewport.bind(this);
    };

    componentDidMount(){
        window.addEventListener('scroll', this.checkIfInViewport, false);
        this.setState({eventAttached: true});
    };

    componentWillUnmount(){
        if(this.state.eventAttached)
            window.removeEventListener('scroll', this.checkIfInViewport, false);
    };

    checkIfInViewport(){
        const rect = this.refs.ref.getBoundingClientRect();
        
        if( rect.top >= 0 &&
            rect.left >=0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            ) {
                this.setState({isInViewport: true, eventAttached: false});
                window.removeEventListener('scroll', this.checkIfInViewport, false);
            }
        console.log(1);
    };

    render(){
        const classes = "skill" + (this.state.isInViewport ? " animate" : "");
        return (
            <div className={classes} ref="ref">
                <div className="skillBar"></div>
            </div>);
    };
};

export default Skill;