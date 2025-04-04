import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 md:p-10"
    >
      <h2 className="text-base font-semibold mb-4 inline-block border-solid border rounded-lg px-2 py-1 border-gray-300">
        ABOUT
      </h2>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        I'm a front-end developer who loves crafting thoughtful user interfaces
        and building clean, scalable code. With a background in full-stack
        development, I’ve found my passion in turning designs into fast,
        responsive, and accessible websites and applications.
      </p>
      <br />
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        Outside of work, I’m probably throwing discs at trees (disc golf),
        building side projects, or exploring new tech stacks. I'm most fulfilled
        when I'm solving real problems, creating value for others, and learning
        something new.
      </p>
    </motion.section>
  );
};

export default About;
