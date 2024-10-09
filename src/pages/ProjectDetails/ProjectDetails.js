import './ProjectDetails.scss';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { PROJECTS_INFO } from '../../assets/data/ProjectsData';
import ReactGA from "react-ga4";
import SimpleFooter from '../../components/SimpleFooter/SimpleFooter';

function ProjectDetails() {

    let { projectName } = useParams();
    useEffect(()=> {
        window.scrollTo(0, 0);
        let pageName = "Projects/" + projectName;
        ReactGA.send({ hitType: "pageview", page: "/projects/"+projectName, title: pageName });
    }, [projectName]);

    let project;
    let images = [];
    let tags = [];
    let redirectLinks = [];
    let technologies = "";
    const navigate = useNavigate();

    project = PROJECTS_INFO.projectList.find(project => project.name === projectName);
    if (!project) {
        navigate("/not-found");
    }else{
        for (const [index, value] of project.imageList.entries()) {
            images.push(<a href={value} target="_blank" rel="noreferrer" key={index}><img key={index} src={value} className="thumbnail project-image" alt="Project"/></a>)
        }
        for (const [index, value] of project.tags.entries()) {
            tags.push(<div key={index} className="tag primary-color">{value}</div>)
        }
        for (const [index, value] of project.technologies.entries()) {
            technologies += value;
            if (index < project.technologies.length-1) technologies += ", ";
        }
        for (const [index, value] of project.redirectLinks.entries()) {
            redirectLinks.push (
                <a className="primary-button primary-button-color redirect-link" href={value.link} key={index} target="_blank" rel="noreferrer" onClick={() => sendClickActionInfo()}>
                    <span key={index}>{value.name}</span>
                </a>)
        }
    }

    function sendClickActionInfo () {
        ReactGA.event({
          category: "Click",
          action: "Click on action",
          label: projectName
        });
    };

    function sendClickContactInfo () {
        ReactGA.event({
          category: "Click",
          action: "Click on Contact",
          label: projectName
        });
    };

    return (
        <div className="page-margin">
            <div className="breadcrumb">
                <Link to="/projects">
                    <p className="text-color"> &lt; Return to Projects</p>
                </Link>
            </div>
            <div className="project-details-title"><h1 className="title">{project?.name}</h1></div>
            <div className="project-details-container">
                <div className="project-infos">
                    <div className= "tag-list secondary-color">
                        {tags}
                    </div>
                    {/* <h3>Year</h3>
                    <p>{project?.year}</p> */}
                    <h3>Description</h3>
                    <p className="project-description">{project?.fullDescription}</p>
                    <h3>Technologies</h3>
                    <p>{technologies}</p>
                    <h3 style={{marginBottom: '30px'}}>Need more information?</h3>
                    <div className="redirect-button-list">
                        {redirectLinks}
                        <Link className="primary-button primary-button-color redirect-link" to="/contact" target="_blank" onClick={() => sendClickContactInfo()}>
                            <span>Contact Me</span>
                        </Link>
                    </div>
                    <h3 className="project-image-list-header">Project Images</h3>
                </div>
                <div className="project-image-list">
                    {images}
                </div>
            </div>
            <SimpleFooter></SimpleFooter>
        </div>
    );
}

export default ProjectDetails;