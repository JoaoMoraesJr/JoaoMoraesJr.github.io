import './TechnologiesList.scss';
import { FaReact, FaUnity, FaPython } from 'react-icons/fa'
import { FaGolang, FaAws } from 'react-icons/fa6'
import { SiBlender } from 'react-icons/si'

function TechnologiesList() {

    return (
        <ul className="technologies-list">
            <li className = "technologies-item">
                <div className="technologies-icons primary-color">
                    <FaReact title="React" className="technology-icon" />
                    <FaGolang title="Golang" className="technology-icon" />
                    <FaAws title="AWS" className="technology-icon" />
                </div>
                <span><strong>Full Stack Development</strong></span>
                <span>End-to-end full-stack experience across frontend, backend, and infrastructure.</span>
            </li>
            <li className = "technologies-item" style={{paddingRight: 0}}>
                <div className="technologies-icons primary-color">
                    <FaPython title="Python" className="technology-icon"/>
                </div>
                <span><strong>Artificial Inteligence</strong></span>
                <span>Experience on research, developing AI models and GenAI integrations.</span>
            </li>
            <li className = "technologies-item">
                <div className="technologies-icons primary-color">
                    <FaUnity title="Unity" className="technology-icon" />
                    <SiBlender title="Blender" className="technology-icon"/>
                </div>
                <span><strong>Game Development</strong></span>
                <span>Experience building complete game experiences from concept to gameplay.</span>
            </li>
        </ul>
    );
}

export default TechnologiesList;