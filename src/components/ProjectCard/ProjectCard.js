import './ProjectCard.scss';
import thumbnail from '../../assets/img/project-images/default_code0.jpg';
import { Link, useRouteMatch } from 'react-router-dom';

function ProjectCard(props) {

    let cardData = props.projectInfo;

    let tags = [];

    for (const [index, value] of cardData.tags.entries()) {
        tags.push(<div key={index} className="card-tag">{value}</div>)
    }

    return (
        <div>
            <Link to="/details">
                <div className="gradient-background">
                    <img src={cardData.thumbnail} className="thumbnail" alt="thumbnail"/>
                    <p className="card-name card-text">{cardData.name}</p>
                    <div className="card-info card-text">
                        <p>{cardData.shortDescription}</p>
                        <p>Year: {cardData.year}</p>
                        <div className= "card-tag-list">
                            {tags}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;