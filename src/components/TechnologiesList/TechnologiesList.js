import './TechnologiesList.scss';
import { FaAngular, FaReact, FaUnity, FaPython } from 'react-icons/fa'
import { SiDotNet, SiBlender } from 'react-icons/si'

function TechnologiesList() {

    return (
        <ul className="home-inline-list technologies-list">
            <li className = "technologies-item">
                <div className="technologies-icons"><FaAngular /><FaReact /><SiDotNet /></div>
                <span><strong>Web development</strong></span>
                <span>Full stack experience in web development</span>
            </li>
            <li className = "technologies-item">
                <div className="technologies-icons"><FaUnity /><SiBlender /></div>
                <span><strong>Game Development</strong></span>
                <span>experience building games from art to coding</span>
            </li>
            <li className = "technologies-item" style={{paddingRight: 0}}>
                <div className="technologies-icons"><FaPython /></div>
                <span><strong>Artificial Inteligence</strong></span>
                <span>Experience on research, developing AI models</span>
            </li>
        </ul>
    );
}

export default TechnologiesList;