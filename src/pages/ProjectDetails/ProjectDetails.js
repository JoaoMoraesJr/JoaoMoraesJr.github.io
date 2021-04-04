import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Projects from '../Projects/Projects';
import './ProjectDetails.scss';
import thumbnail from '../../assets/img/project-images/default_code0.jpg';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { PROJECTS_INFO } from '../../assets/data/ProjectsData';

function ProjectDetails() {

    let project;
    let { projectName } = useParams();
    project = PROJECTS_INFO.projectList.find(project => project.name == projectName);

    let images = [];
    let tags = [];
    let redirectLinks = [];
    let technologies = "";
    for (const [index, value] of project.imageList.entries()) {
        images.push(<img key={index} src={value} className="thumbnail project-image" alt="thumbnail"/>)
    }
    for (const [index, value] of project.tags.entries()) {
        tags.push(<div key={index} className="tag">{value}</div>)
    }
    for (const [index, value] of project.technologies.entries()) {
        technologies += value;
        if (index < project.technologies.length-1) technologies += ", ";
    }
    for (const [index, value] of project.redirectLinks.entries()) {
        redirectLinks.push (
            <a className="redirect-link" href={value.link} target="_blank">
                <span>{value.name}</span>
            </a>
        )
    }
    console.log(technologies);

    return (
        <div className="ProjectDetails">
            <div className="breadcrumb">
                <Link to="projects">
                    <p> &lt; Return to Projects</p>
                </Link>
            </div>
            <h1 className="title">{project.name}</h1>
            <div className="project-details-container">
                <div className="project-infos">
                    <div className= "tag-list">
                        {tags}
                    </div>
                    <h3>Year</h3>
                    <p>{project.year}</p>
                    <h3>Description</h3>
                    <p className="project-description">{project.fullDescription}</p>
                    <h3>Technologies</h3>
                    <p>{technologies}</p>
                    <h3 style={{marginBottom: '30px'}}>Need more information?</h3>
                    {redirectLinks}
                    <a className="redirect-link" href="/contact" target="_blank">
                        <span>Contact Me</span>
                    </a>
                </div>
                <div className="project-image-list">
                    {images}
                </div>

            </div>
        </div>
    );
}

export default ProjectDetails;