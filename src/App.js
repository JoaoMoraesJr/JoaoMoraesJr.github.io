import NavBar from './components/NavBar/NavBar'
import './App.scss';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import ReactGA from "react-ga4";
import { useState } from 'react';

function App() {

  ReactGA.initialize("G-DG3XM3X8KF");


  const [isGifLoaded, setGifLoaded] = useState(false);

  function startPage() {
    setGifLoaded(true);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 3000);
  }

  return (
    <div className="App">
      <div className={"animation-container " + (isGifLoaded === true ? "start-animation" : "")}><img className="logo-gif" src={require('./assets/img/logoGif.gif')} alt="logo" onLoad={() => startPage()}></img></div>
      <Router>
        <NavBar />
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route path="/projects/:projectName" component={ProjectDetails}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
