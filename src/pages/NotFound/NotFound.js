import './NotFound.scss';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

function NotFound() {

    useEffect(()=> {
        ReactGA.send({ hitType: "pageview", page: "/not-found", title:"Not Found" });
    }, []);

    return(
        <div className="not-found not-found-container">
            <h1>Oops!</h1>
            <h4>We can't seem to find the page you are looking for.</h4>
            <span><strong>Error code: </strong>404</span>
        </div>
    )
}

export default NotFound;