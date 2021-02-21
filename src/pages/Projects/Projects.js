import './Projects.scss';

import { VscFilter } from "react-icons/vsc";
import ProjectCard from '../../components/ProjectCard/ProjectCard';

function Projects() {
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
            </div>
            <div className="projects-list">
                <div className="item"><ProjectCard /></div>
                <div className="item"><ProjectCard /></div>
                <div className="item"><ProjectCard /></div>
                <div className="item"><ProjectCard /></div>
                <div className="item"><ProjectCard /></div>
                <div className="item"><ProjectCard /></div>
            </div>
        </div>
    );
}

export default Projects;