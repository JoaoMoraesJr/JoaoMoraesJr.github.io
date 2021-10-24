import './TechnologiesList.scss';
import { FaAngular, FaReact, FaUnity, FaPython } from 'react-icons/fa'
import { SiDotNet, SiBlender } from 'react-icons/si'

function TechnologiesList() {

    return (
        <ul className="technologies-list">
            <li className = "technologies-item">
                <div className="technologies-icons"><FaAngular title="Angular" /><FaReact title="React" /><SiDotNet title="dotNet" /></div>
                <span><strong>Web development</strong></span>
                <span>Full stack experience in web development</span>
            </li>
            <li className = "technologies-item">
                <div className="technologies-icons"><FaUnity title="Unity"/><SiBlender title="Blender"/></div>
                <span><strong>Game Development</strong></span>
                <span>Experience building games from art to coding</span>
            </li>
            <li className = "technologies-item" style={{paddingRight: 0}}>
                <div className="technologies-icons"><FaPython title="Python"/></div>
                <span><strong>Artificial Inteligence</strong></span>
                <span>Experience on research, developing AI models</span>
            </li>
        </ul>
    );
}

export default TechnologiesList;