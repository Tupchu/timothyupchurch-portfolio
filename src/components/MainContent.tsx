import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";

const MainContent = () => {
  return (
    <div className="space-y-2">
      <About />
      <Skills />
      <Experience />
    </div>
  );
};

export default MainContent;
