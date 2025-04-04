import { motion } from "framer-motion";
import InfoCard from "../components/InfoCard";
import { TInfoCard } from "../types";

const experienceData: TInfoCard[] = [
  {
    title: "Western Governors University",
    subtitle: "Bachelor of Science: Software Development",
    date: "April 2020 - Sep 2021",
    details:
      "Graduated from Western Governors University with an in-depth understanding of software development. Developed applications from the ground up for the web, mobile, and desktop. Designed the user interface, data models, and logic for all applications built.",
  },
  {
    title: "Southwestern Illinois College",
    subtitle: "Associate of Science: Applied Science",
    date: "Jan 2016 – May 2019",
    details: "",
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      viewport={{ once: true }}
      className="p-6 md:p-10"
    >
      <h2 className="text-base font-semibold mb-8 inline-block border-solid border rounded-lg px-2 py-1 border-gray-300">
        EDUCATION
      </h2>

      <div className="space-y-4">
        {experienceData.map((item, i) => (
          <InfoCard key={i} item={item} />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
