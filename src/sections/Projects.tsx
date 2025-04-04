import ProjectCard from "../components/ProjectCard";
import reactcinemaImg from "../assets/images/reactcinema.svg";
import coffeeshopImg from "../assets/images/coffeeshop.svg";

const projectData = [
  {
    title: "Reactcinema",
    description: "",
    image: reactcinemaImg,
    details:
      "Built with React Native, Expo, Supabase, and Square. Focused on creating a fast and frictionless ordering experience.",
    tech: ["React", "TypeScript", "Clerk", "React Query", "One more"],
  },
  {
    title: "Coffee Shop",
    description: "",
    image: coffeeshopImg,
    details:
      "Built with React Native, Expo, and TypeScript. Focused on creating a fast and frictionless ordering experience.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Square"],
  },
];

const Projects = () => {
  return (
    <section className="p-6 md:p-10 space-y-8">
      <h2 className="text-base font-semibold mb-8 inline-block border-solid border rounded-lg px-2 py-1 border-gray-300">
        PROJECTS
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {projectData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
