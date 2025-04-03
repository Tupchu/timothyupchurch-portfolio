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
      <div className="grid gap-4 lg:grid-cols-1">
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h1 className="text-2xl font-bold">Hello, I’m Timothy</h1>
          <p className="text-sm text-gray-600">Front-End Developer</p>

          <div className="flex items-center space-x-2 w4-0 inline-block border-solid border rounded-lg px-2 py-1 border-gray-300">
            <span className="h-3 w-3 bg-green-500 rounded-full"></span>
            <span className="text-sm">Available for work</span>
          </div>
          <div className="flex gap-2">
            <MapPin />
            <p>Mascoutah, IL</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <div className="text-sm space-y-1">
            <div className="flex gap-2">
              <Globe />
              <p>Timothyupchurch.com</p>
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
            <button className="w-full bg-black text-white py-2 rounded-md">
              Download CV
            </button>
            <button className="w-full border border-black py-2 rounded-md">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Sidebar;
