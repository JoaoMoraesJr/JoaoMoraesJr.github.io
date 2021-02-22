import './ProjectCard.scss';
import thumbnail from '../../assets/img/project-images/default_code0.jpg';

function ProjectCard() {
    return (
        <div>
            <div className="gradient-background">
                <img src={thumbnail} className="thumbnail" alt="thumbnail"/>
                <p className="card-name card-text">Project Name</p>
                <div className="card-info card-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan placerat purus sit amet pellentesque.</p>
                    <p>Year: 2020</p>
                    <div className= "tag-list">
                        <div className="tag">AI</div>
                        <div className="tag">Research</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;