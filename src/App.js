import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Storyline from "./components/Storyline";
import ResultsStrip from "./components/ResultsStrip";
import FeaturedImpact from "./components/FeaturedImpact";
import RecruiterSnapshot from "./components/RecruiterSnapshot";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import About from "./components/About";
import Projects from "./components/Projects";
import EngineeringNotes from "./components/EngineeringNotes";
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
      <Storyline />
      <ResultsStrip />
      <FeaturedImpact />
      <RecruiterSnapshot />
      <CurrentlyBuilding />
      <About />
      <Projects />
      <EngineeringNotes />
      <Skills />
      <Experience />
      <Contact />
      <footer className="footer">
        Designed & built by Hemsuriya Manikandan
      </footer>
      <ScrollTop />
    </>
  );
}

export default App;
