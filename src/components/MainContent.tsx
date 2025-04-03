import About from "../sections/About";
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
    </div>
  );
};

export default MainContent;
