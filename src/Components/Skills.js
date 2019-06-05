import React from 'react';
import Skill from './Skill';

const Skills = () => {
    return (<div className="skills">
        <Skill progress="0%">Javascript</Skill>
        <Skill progress="25%">Javascript</Skill>
        <Skill progress="50%">Javascript</Skill>
        <Skill progress="75%">Javascript</Skill>
        <Skill progress="100%">Javascript</Skill>
    </div>);
};

export default Skills;