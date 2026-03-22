import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import ScrollTop from "./components/ScrollTop";
import "./App.css";

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <Hero />
      <CurrentlyBuilding />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <ScrollTop />
    </>
  );
}

export default App;