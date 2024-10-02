import './SimpleFooter.scss';
import { AiOutlineCopyright } from "react-icons/ai";

function SimpleFooter() {

    return (
        <div className="footer-section">
            <div className="footer-background"></div>
            <div className="center-container">
                <span>Copyright <AiOutlineCopyright/> João Moraes</span>
            </div>
        </div>
    );
}

export default SimpleFooter