import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    
    <Navbar />
    <Header />
    <AboutMe />
    <Experience />
    <Projects />
    <Contact />
    <Footer />

    </>
  );
}

export default App;
