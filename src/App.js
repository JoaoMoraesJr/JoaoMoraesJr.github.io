import NavBar from './components/NavBar/NavBar'
import './App.scss';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import ReactGA from "react-ga4";
import { useEffect } from 'react';
import { useTheme } from './ThemeContext';
import TypingAnimation from './components/TypingAnimation/TypingAnimation';

function App() {

  ReactGA.initialize("G-DG3XM3X8KF");


  const { isDarkMode } = useTheme();
  const displayAnimation = true;


  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 3000);
  });

  return (
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'} App`}>
      {displayAnimation ? 
        <TypingAnimation></TypingAnimation>
        : <></>
      }
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
            <Route path="/projects/:projectName" element={<ProjectDetails />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </div>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
