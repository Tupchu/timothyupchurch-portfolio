import ProjectCard from "../components/ProjectCard";
import reactcinemaImg from "../assets/images/reactcinema.png";

const projectData = [
  {
    title: "Coffee Shop App",
    description: "Mobile ordering app for a local coffee shop.",
    image: reactcinemaImg,
    details:
      "Built with React Native, Expo, Supabase, and Square. Focused on creating a fast and frictionless ordering experience.",
    tech: ["React Native", "TypeScript", "Supabase", "Square"],
  },
  {
    title: "DiscVault",
    description: "Virtual disc golf bag + inventory manager.",
    image: "/images/discvault.png",
    details:
      "Lets disc golfers organize their collection, share their bags, and monetize via affiliate links.",
    tech: ["React Native", "Expo", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <section className="p-6 md:p-10 space-y-8">
      <h2 className="text-base font-semibold mb-8 inline-block border-solid border rounded-lg px-2 py-1 border-gray-300">
        PROJECTS
      </h2>

      <div className="md:flex gap-4">
        {projectData.map((project, i) => (
          <ProjectCard
            key={project.title}
            {...project}
            defaultOpen={i === 0} // First one is expanded
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
