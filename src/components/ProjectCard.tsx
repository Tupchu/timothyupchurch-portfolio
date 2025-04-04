import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  details?: string;
  tech?: string[];
  defaultOpen?: boolean;
};

const ProjectCard = ({
  title,
  description,
  image,
  details,
  tech,
  defaultOpen = false,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="border border-gray-200 rounded-xl overflow-hidden shadow-md flex-1"
    >
      <img src={image} alt={title} className="w-full h-60 bg-auto" />

      <div className="p-6 space-y-3">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-gray-700 overflow-hidden space-y-3 pt-3"
            >
              {details && <p>{details}</p>}

              {tech && tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
