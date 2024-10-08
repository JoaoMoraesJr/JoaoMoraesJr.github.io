import './ProjectCard.scss';
import { useTheme } from '../../ThemeContext';

function ProjectCard(props) {

    const { isDarkMode } = useTheme();
    let cardData = props.projectInfo;
    let tags = [];

    for (const [index, value] of cardData.tags.entries()) {
        tags.push(<div key={index} className="card-tag">{value}</div>)
    }

    return (
        <div className="project-card">
            <div className="gradient-background card-title-background-color thumbnail-size">
                <img src={cardData.thumbnail} className="thumbnail thumbnail-size" alt="thumbnail"/>
                <p className={`card-name card-text ${isDarkMode ? 'card-text-dark' : 'card-text-light'}`}>{cardData.name}</p>
                <div className="card-info card-text">
                    <p className={`card-description card-text ${isDarkMode ? 'card-text-dark' : 'card-text-light'}`}>{cardData.shortDescription}</p>
                    {/* <p className="extra-info">Year: {cardData.year}</p> */}
                    <div className= "card-tag-list extra-info">
                        {tags}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;