import './Projects.scss';
import { VscFilter } from "react-icons/vsc";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useState, useEffect } from 'react';
import { PROJECTS_INFO } from '../../assets/data/ProjectsData';
import { Link} from 'react-router-dom';

function Projects() {

    let data;

    useEffect(()=> {
        data = PROJECTS_INFO;
        window.scrollTo(0, 0)
    }, []);

    const items = []

    for (const [index, value] of PROJECTS_INFO.projectList.entries()) {
        items.push(
            <div key={index} className="item">
                <Link to={`/projects/${value.name}`}>
                    <ProjectCard projectInfo={value} />
                </Link>
            </div>
        )
    }

    return (
        <div className="projects">
            <div className="header">
                {/* <ul className="filters">
                    <li className="filter-item"><VscFilter /></li>
                    <li className="filter-item">All</li>
                    <li className="filter-item">|</li>
                    <li className="filter-item">AI</li>
                    <li className="filter-item">Research</li>
                </ul> */}
            </div>
            <div className="projects-list">
                <div className="item projects-title-container">
                <h1 className="title">Projects</h1>

                </div>
                <span className="item middle-padding-grid"/>
                <span className="item last-padding-grid"/>
                {items}
            </div>
        </div>
    );
}

export default Projects;