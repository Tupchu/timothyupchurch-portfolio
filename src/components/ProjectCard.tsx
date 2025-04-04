import { motion } from "framer-motion";
import Badge from "./Badge";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  details?: string;
  tech?: string[];
  link: string;
  sourceCode?: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  details,
  tech,
  link,
  sourceCode,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="border border-gray-200 rounded-xl overflow-hidden shadow-md flex-1"
    >
      <div className="bg-gradient-to-r from-neutral-200 to-neutral-100 pt-4 pb-4 cursor-pointer">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt={title} className="w-full h-50 bg-auto mt-4" />
        </a>
      </div>

      <div className="flex-row p-6 space-y-3 content-between">
        <div>
          <div className="flex justify-between items-center ">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>

          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tech.map((t, i) => (
                <Badge key={i} label={t} size="sm" />
              ))}
            </div>
          )}
        </div>

        <p className="text-sm text-gray-700 mb-6 mt-6">{details}</p>

        <div className="text-sm text-gray-700 flex gap-4 items-center">
          <button className="border border-solid border-gray-300 rounded-lg px-2 py-1 cursor-pointer hover:border-gray-400 transition-all duration-300">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex"
            >
              View Project
            </a>
          </button>
          {sourceCode && (
            <a
              href={sourceCode}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-8 decoration-gray-300 hover:decoration-gray-400 transition-all duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
