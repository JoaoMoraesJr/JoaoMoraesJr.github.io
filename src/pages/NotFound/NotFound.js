import './NotFound.scss';
import { FaLinkedin, FaGithub, FaItchIo, FaInstagram } from 'react-icons/fa'
import { GrMail } from "react-icons/gr";

function NotFound() {

    return(
        <div className="not-found not-found-container">
            <h1>Oops!</h1>
            <h4>We can't seem to find the page you are looking for.</h4>
            <span><strong>Error code: </strong>404</span>
        </div>
    )
}

export default NotFound;