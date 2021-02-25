import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Projects from '../Projects/Projects';
import './ProjectDetails.scss';
import thumbnail from '../../assets/img/project-images/default_code0.jpg';

function ProjectDetails() {
    return (
        <div className="ProjectDetails">
            <h1 className="title">Project Name</h1>
            <div className="project-details-container">
                <div className="project-infos">
                    <div className= "tag-list">
                        <div className="tag">AI</div>
                        <div className="tag">Research</div>
                    </div>
                    <h3>Year</h3>
                    <p>2020</p>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit scelerisque ante, dictum ornare arcu sollicitudin id. Fusce neque ligula, bibendum et ante condimentum, bibendum viverra arcu. Suspendisse dapibus condimentum massa non auctor. In id fermentum libero. Duis laoreet, lectus eu iaculis feugiat, turpis urna tristique massa, ac condimentum mauris urna eget ligula. Integer vulputate, quam in suscipit facilisis, mauris elit convallis nisi, non ornare nunc elit ac mi. Mauris tempor, quam non condimentum vulputate, elit est scelerisque lorem, non congue lacus mi quis erat. Nunc ornare sollicitudin odio at molestie. Mauris id lobortis mi. Phasellus eu sodales nibh. Maecenas.</p>
                    <h3>Technologies</h3>
                    <p>Technology, Technology, Technology</p>
                    <h3>Need more information?</h3>
                    <p>Button, Button</p>
                </div>
                <div className="project-image-list">
                    <img src={thumbnail} className="thumbnail project-image" alt="thumbnail"/>
                    <img src={thumbnail} className="thumbnail project-image" alt="thumbnail"/>
                </div>

            </div>
        </div>
    );
}

export default ProjectDetails;