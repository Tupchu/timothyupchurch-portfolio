import { motion } from "framer-motion";
import InfoCard from "../components/InfoCard";
import { TInfoCard } from "../types";

const experienceData: TInfoCard[] = [
  {
    title: "Software Developer",
    subtitle: "Freelance",
    date: "Present",
    details:
      "Currently working with a small business client to design and develop a custom mobile ordering app. I’m focused on delivering a clean and intuitive user experience while collaborating directly with the business owner to align features with real-world needs. The app is built using React Native with Expo, and leverages Supabase for authentication and data, Square for payments, and TypeScript for type safety and scalability.",
    defaultOpen: true,
  },
  {
    title: "Software Developer – Team Lead",
    subtitle: "Engage",
    date: "Sep 2021 – Mar 2023",
    details:
      "At Engage, I led end-to-end software development projects, working closely with clients and senior leadership to ensure each solution aligned with business goals. I oversaw projects from initial planning through deployment, collaborating across teams to refine features, provide accurate estimates, and adjust to evolving requirements. I also supported new team members through onboarding and maintained clear technical documentation for implementations, third-party services, and setup processes. As a team lead, I organized working sessions, set priorities, and encouraged open collaboration. I promoted Agile practices on new projects, focusing on iterative development and client feedback to drive continuous improvement.",
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
        EXPERIENCE
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
