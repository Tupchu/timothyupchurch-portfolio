import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Smartphone } from "lucide-react";

const Sidebar = () => {
  return (
    <motion.section
      id="sidebar"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="grid gap-4 lg:grid-cols-1 md:max-lg:flex">
        {/* profile card */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4 md:max-lg:flex-1">
          <h1 className="text-2xl font-bold">Hello, I’m Timothy</h1>
          <p className="text-sm text-gray-600">Front-End Developer</p>

          <div className="inline-flex items-center space-x-2 border border-gray-300 rounded-lg px-2 py-1">
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

        {/* contact card */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4 md:max-lg:flex-1">
          <div className="text-sm space-y-2">
            <div className="flex gap-2">
              <Globe />
              <a href="https://www.linkedin.com/in/timothy-upchurch-61a108217/">
                TimothyUpchurch.com
              </a>
            </div>
            <div className="flex gap-2">
              <Smartphone />
              <p>(618) 210-6687</p>
            </div>
            <div className="flex gap-2">
              <Mail />
              <p>timmyupc@gmail.com</p>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full border border-gray-300 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-300">
              Download CV
            </button>
            <button className="w-full bg-black text-white py-2 rounded-md cursor-pointer hover:bg-black/80 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Sidebar;
