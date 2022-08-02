import './Projects.scss';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useEffect } from 'react';
import { PROJECTS_INFO } from '../../assets/data/ProjectsData';
import { Link} from 'react-router-dom';
import ReactGA from "react-ga4";

function Projects() {

    useEffect(()=> {
        window.scrollTo(0, 0)
        ReactGA.send({ hitType: "pageview", page: "/projects", title: "Projects" });
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