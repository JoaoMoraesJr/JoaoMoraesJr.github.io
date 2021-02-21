import './ProjectCard.scss';
import thumbnail from '../../assets/img/project-images/default_code0.jpg';

function ProjectCard() {
    return (
        <div>
            <div>
                <div className="gradient-background">
                    <img src={thumbnail} className="thumbnail" alt="thumbnail"/>
                    <p className="project-name">Project Name</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;