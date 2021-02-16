import './ProjectCard.scss';
import thumbnail from '../../assets/img/project-images/default_code0.jpg';

function ProjectCard() {
    return (
        <div>
            <div>
                <div className="img-gradient">
                    <img src={thumbnail} className="thumbnail" alt="thumbnail"/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;