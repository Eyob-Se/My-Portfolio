import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useCursor } from "../context/CursorContext";

const Footer: React.FC = () => {
  const { setCursorVariant } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 dark:bg-primthree border-t border-gray-200 dark:border-gray-600 transition-colors duration-300">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-microlab font-medium flex items-center text-gray-600 dark:text-gray-400 mb-4 md:mb-0"
          >
            Made by Eyob Seleshi
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <p className="font-microlab font-medium text-gray-600 dark:text-gray-400 text-sm">
              © 2025 All rights reserved
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
