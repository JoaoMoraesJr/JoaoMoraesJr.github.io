import './ProjectCard.scss';

function ProjectCard(props) {

    let cardData = props.projectInfo;
    let tags = [];

    for (const [index, value] of cardData.tags.entries()) {
        tags.push(<div key={index} className="card-tag">{value}</div>)
    }

    return (
        <div className="project-card">
            <div className="gradient-background thumbnail-size">
                <img src={cardData.thumbnail} className="thumbnail thumbnail-size" alt="thumbnail"/>
                <p className="card-name card-text">{cardData.name}</p>
                <div className="card-info card-text">
                    <p style={{margin: '0px'}}>{cardData.shortDescription}</p>
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