import './TechnologiesList.scss';
import { FaAngular, FaReact, FaUnity, FaPython } from 'react-icons/fa'
import { SiBlender } from 'react-icons/si'
import { SiDotnet } from "react-icons/si";
import { SiSpring } from "react-icons/si";

function TechnologiesList() {

    return (
        <ul className="technologies-list">
            <li className = "technologies-item">
                <div className="technologies-icons primary-color">
                    <FaAngular title="Angular" className="technology-icon" />
                    <FaReact title="React" className="technology-icon" />
                    <SiSpring title="Spring Boot" className="technology-icon" />
                    <SiDotnet title="DotNet" className="technology-icon" />
                </div>
                <span><strong>Full Stack Development</strong></span>
                <span>Full stack experience in web and mobile development</span>
            </li>
            <li className = "technologies-item">
                <div className="technologies-icons primary-color">
                    <FaUnity title="Unity" className="technology-icon" />
                    <SiBlender title="Blender" className="technology-icon"/>
                </div>
                <span><strong>Game Development</strong></span>
                <span>Experience building games from art to coding</span>
            </li>
            <li className = "technologies-item" style={{paddingRight: 0}}>
                <div className="technologies-icons primary-color">
                    <FaPython title="Python" className="technology-icon"/>
                </div>
                <span><strong>Artificial Inteligence</strong></span>
                <span>Experience on research, developing AI models</span>
            </li>
        </ul>
    );
}

export default TechnologiesList;