import './Projects.scss';
import { VscFilter } from "react-icons/vsc";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useState, useEffect } from 'react';
import { PROJECTS_INFO } from '../../assets/data/ProjectsData';

function Projects() {

    let data;

    useEffect(()=> {
        data = PROJECTS_INFO;
    }, []);

    const items = []

    for (const [index, value] of PROJECTS_INFO.projectList.entries()) {
        items.push(<div key={index} className="item"><ProjectCard projectInfo={value} /></div>)
    }

    return (
        <div className="projects">
            <div className="header">
                <h1 className="title">Projects</h1>
                {/* <ul className="filters">
                    <li className="filter-item"><VscFilter /></li>
                    <li className="filter-item">All</li>
                    <li className="filter-item">|</li>
                    <li className="filter-item">AI</li>
                    <li className="filter-item">Research</li>
                </ul> */}
                <div>{JSON.stringify(data)}</div>
            </div>
            <div className="projects-list">
                {/* <div className="item"><ProjectCard /></div>
                <div className="item"><ProjectCard /></div>
                <div className="item"><ProjectCard /></div>
                <div className="item"><ProjectCard /></div>
                <div className="item"><ProjectCard /></div>
                <div className="item"><ProjectCard /></div> */}
                {items}
            </div>
        </div>
    );
}

export default Projects;