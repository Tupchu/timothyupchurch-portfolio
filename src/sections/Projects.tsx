import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import reactcinemaImg from "../assets/images/reactcinema.svg";
import coffeeshopImg from "../assets/images/coffeeshop.svg";

const projectData = [
  {
    title: "React Cinema",
    description: "",
    image: reactcinemaImg,
    details:
      "A minimalist movie search app built with React and the TMDb API. Features search-as-you-type functionality with debounce optimization for improved performance and reduced API calls. Includes Clerk authentication, React Query for efficient data fetching and caching, and React Hook Form for streamlined form handling.",
    tech: ["React", "React Hook Form", "React Query", "Clerk"],
    link: "https://reactcinema.com",
    sourceCode: "https://github.com/Tupchu/timothyupchurch-portfolio",
  },
  {
    title: "Coffee Shop",
    description: "",
    image: coffeeshopImg,
    details:
      "Mobile ordering app for a local coffee shop, built with React Native and Expo. The app features a categorized menu with dynamic product customization, real-time cart management, and support for pickup and delivery orders. Built with Supabase for authentication and data management, and integrated with Square for secure, in-app payments. Includes an internal admin panel for managing products, categories, and drink options.",
    tech: ["React Native", "Expo", "TypeScript", "Square", "Supabase"],
    link: "https://figma.com",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      viewport={{ once: true }}
      className="p-6 md:p-10 space-y-8"
    >
      <h2 className="text-base font-semibold mb-8 inline-block border-solid border rounded-lg px-2 py-1 border-gray-300">
        PROJECTS
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {projectData.map((project, i) => (
          <ProjectCard key={i} id={i} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
