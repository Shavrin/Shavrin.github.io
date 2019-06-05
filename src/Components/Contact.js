import React from 'react';

const Contact = () => {
    return (<div className="contact">
        <p>
        Get in touch on 
            <a href="https://github.com/Shavrin">
                <img className="contactLogo" 
                src="./GithubLogo.png" 
                alt="Github"/> 
            </a>
        and    
            <a href="https://www.linkedin.com/in/kacper-olek-987a518b/">
                <img className="contactLogo" 
                src="./LinkedInLogo.png"
                alt="LinkedIn"/>
            </a>
        </p>
    </div>);
};

export default Contact;