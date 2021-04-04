import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar'
import './App.scss';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="app-body">
          <Switch>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/:projectName" component={ProjectDetails}></Route>
          </Switch>
        </div>
      </Router>
        {/* <Projects /> */}
        {/* <ProjectDetails /> */}
      <Footer />
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
