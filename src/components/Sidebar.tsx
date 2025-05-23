import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Smartphone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Sidebar = () => {
  return (
    <motion.section
      id="sidebar"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid gap-4">
        <div className="grid gap-4 lg:grid-cols-1 md:max-lg:flex">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {/* profile card */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4 md:max-lg:flex-1 dark:bg-gray-700 dark:text-gray-300 min-h-full">
              <h1 className="text-2xl font-bold">Hello, I’m Timothy</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Front-End Developer
              </p>

              <div className="inline-flex items-center space-x-2 border border-gray-300 rounded-lg px-2 py-1 dark:border-gray-600">
                {/* Animated dot */}
                <div className="relative h-3 w-3 inline-flex">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>

                {/* Text */}
                <span className="text-sm">Available for work</span>
              </div>

              <div className="flex gap-2">
                <MapPin />
                <p>Mascoutah, IL</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {/* contact card */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4 md:max-lg:flex-1 dark:bg-gray-700 dark:text-gray-300">
              <div className="text-sm space-y-2">
                <div className="flex gap-2">
                  <Globe />
                  <a
                    href="https://www.linkedin.com/in/timothy-upchurch-61a108217/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </div>
                <div className="flex gap-2">
                  <Smartphone />
                  <p>(618) 210-6687</p>
                </div>
                <div className="flex gap-2">
                  <Mail />
                  <a href="mailto:timmyupc@gmail.com">timmyupc@gmail.com</a>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href="/TimothyUpchurch_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="block"
                >
                  <button className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-300 dark:hover:bg-gray-600">
                    Download CV
                  </button>
                </a>

                <a href="#contact" className="block">
                  <button className="w-full bg-black dark:bg-gray-800 text-white dark:text-gray-300 py-2 rounded-md cursor-pointer hover:bg-black/80 dark:hover:bg-gray-600 transition-all duration-300">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <ThemeToggle />
      </div>
    </motion.section>
  );
};

export default Sidebar;
