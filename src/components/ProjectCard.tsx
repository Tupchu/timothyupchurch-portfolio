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
  id: number;
};

const ProjectCard = ({
  title,
  description,
  image,
  details,
  tech,
  link,
  sourceCode,
  id,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: id + 1 - 0.8, delay: id * 0.25 }}
      className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-md flex-1"
    >
      <div className="bg-gradient-to-r from-neutral-200 to-neutral-100 dark:bg-gradient-to-r dark:from-gray-800  dark:to-gray-900 pt-4 pb-4 cursor-pointer flex justify-center">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt={title} className="max-h-56 bg-auto mt-4" />
        </a>
      </div>

      <div className="flex-row px-6 pt-6 space-y-3 content-between flex-1">
        <div>
          <div className="flex justify-between items-center ">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>

          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tech.map((t, i) => (
                <Badge key={i} label={t} size="sm" />
              ))}
            </div>
          )}
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 mt-6">
          {details}
        </p>
      </div>

      <div className="text-sm text-gray-700 flex gap-4 items-center mt-6 px-6 pb-6">
        <a href={link} target="_blank" rel="noreferrer" className="inline-flex">
          <button className="border border-solid border-gray-300 dark:border-gray-600 dark:text-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:border-gray-400 dark:hover:bg-gray-600 transition-all duration-300">
            View Project
          </button>
        </a>
        {sourceCode && (
          <a
            href={sourceCode}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition-all duration-300 dark:text-gray-300 dark:hover:text-gray-600"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
