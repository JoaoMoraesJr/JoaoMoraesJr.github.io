import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar'
import './App.scss';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="app-body">
        <Projects />
        {/* <ProjectDetails /> */}
      </div>
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
