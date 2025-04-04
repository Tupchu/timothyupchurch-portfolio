import { motion } from "framer-motion";
import Badge from "../components/Badge";

// Optional: could be moved to /data/skills.js if you want it reusable
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Supabase",
  "Git",
  "Figma",
  "Framer Motion",
  "UI/UX",
  "SQL",
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="p-6 md:p-10"
    >
      <h2 className="text-base font-semibold mb-8 inline-block border-solid border rounded-lg px-2 py-1 border-gray-300">
        SKILLS
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span key={index} whileHover={{ scale: 1.05 }}>
            <Badge label={skill} />
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
