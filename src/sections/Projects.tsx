import { motion } from "framer-motion";
import Badge from "../components/Badge";

// src/data/projects.ts
export type Project = {
  title: string;
  description: string;
  link: string;
  repo?: string;
  tech?: string[];
};

export const projects: Project[] = [
  {
    title: "Coffee Shop Mobile App",
    description:
      "A mobile ordering app built for a local coffee shop using React Native, Supabase, and Square.",
    link: "https://github.com/you/coffeeshop-app",
    tech: ["React Native", "Expo", "Supabase", "Square"],
    repo: "https://github.com/you/coffeeshop-app",
  },
  {
    title: "DiscVault",
    description:
      "A virtual disc golf bag and inventory manager with creator tools and affiliate links.",
    link: "https://github.com/you/discvault",
    tech: ["React Native", "TypeScript", "Supabase"],
    repo: "https://github.com/you/coffeeshop-app",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 md:p-10"
    >
      <h2 className="text-base font-semibold mb-8 inline-block border-solid border rounded-lg px-2 py-1 border-gray-300">
        PROJECTS
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tag, i) => (
                  <Badge label={tag} key={i} size="sm" />
                ))}
              </div>
            )}
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>

            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black underline"
                >
                  View Project
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-500 underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
