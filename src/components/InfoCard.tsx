import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { TInfoCard } from "../types";

type InfoCardProps = {
  item: TInfoCard;
};

const InfoCard = ({ item }: InfoCardProps) => {
  const [isOpen, setIsOpen] = useState(item.defaultOpen ?? false);
  return (
    <>
      <div
        className="cursor-pointer border border-dashed border-gray-300 rounded-lg p-4 hover:shadow-md transition"
        onClick={() => {
          item.details !== "" && setIsOpen(!isOpen);
        }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.subtitle}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">{item.date}</span>
            {item.details !== "" && (
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronRight />
              </motion.div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="pt-4 overflow-hidden origin-top"
            >
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <p className="text-gray-700 text-sm">{item.details}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default InfoCard;
