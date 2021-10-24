import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Projects from '../Projects/Projects';
import './ProjectDetails.scss';
import thumbnail from '../../assets/img/project-images/default_code0.jpg';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { PROJECTS_INFO } from '../../assets/data/ProjectsData';

function ProjectDetails() {

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, []);

    let project;
    let { projectName } = useParams();
    let images = [];
    let tags = [];
    let redirectLinks = [];
    let technologies = "";
    const history = useHistory();

    project = PROJECTS_INFO.projectList.find(project => project.name == projectName);
    if (!project) {
        history.push("/not-found");
    }else{
        for (const [index, value] of project.imageList.entries()) {
            images.push(<a href={value} target="_blank"><img key={index} src={value} className="thumbnail project-image" alt="Project Image"/></a>)
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
                <a className="button-primary redirect-link" href={value.link} target="_blank">
                    <span>{value.name}</span>
                </a>)
        }
    }

    return (
        <div className="ProjectDetails">
            <div className="breadcrumb">
                <Link to="/projects">
                    <p className="color-black"> &lt; Return to Projects</p>
                </Link>
            </div>
            <h1 className="title">{project?.name}</h1>
            <div className="project-details-container">
                <div className="project-infos">
                    <div className= "tag-list">
                        {tags}
                    </div>
                    <h3>Year</h3>
                    <p>{project?.year}</p>
                    <h3>Description</h3>
                    <p className="project-description">{project?.fullDescription}</p>
                    <h3>Technologies</h3>
                    <p>{technologies}</p>
                    <h3 style={{marginBottom: '30px'}}>Need more information?</h3>
                    <div className="redirect-button-list">
                        {redirectLinks}
                        <Link className="button-primary redirect-link" to="/contact" target="_blank">
                            <span>Contact Me</span>
                        </Link>
                    </div>
                    <h3 className="project-image-list-header">Project Images</h3>
                </div>
                <div className="project-image-list">
                    {images}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;