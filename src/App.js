import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from './components/Projects';


function App() {
  return (
    <>
    
    <Navbar />
    <Header />
    <AboutMe />
    <Experience />
    <Projects />

    </>
  );
}

export default App;
