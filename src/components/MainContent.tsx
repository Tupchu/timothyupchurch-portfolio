import About from "../sections/About";
import Contact from "../sections/Contact";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";

const MainContent = () => {
  return (
    <div className="space-y-2">
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default MainContent;
