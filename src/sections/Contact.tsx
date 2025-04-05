import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 md:p-10"
    >
      <h2 className="text-base font-semibold mb-6 inline-block border-solid border rounded-lg px-2 py-1 border-gray-300">
        CONTACT
      </h2>

      <form
        data-netlify="true"
        method="POST"
        className="space-y-4"
        name="contact"
      >
        <div>
          <label
            className="block text-sm font-medium mb-2 text-gray-600"
            htmlFor="name"
          >
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-md px-3 py-4 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-2 text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-md px-3 py-4 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-600" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full rounded-md px-3 py-4 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <input type="hidden" name="form-name" value="contact" />

        <button
          className="w-full bg-black text-white py-2 rounded-md cursor-pointer hover:bg-black/80 transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
