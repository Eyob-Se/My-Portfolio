import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";
import { useTheme } from "../context/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";

const Header: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Projects", "Skills", "Contact"];

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: string,
  ) => {
    event.preventDefault();
    document.getElementById(item.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200/70 bg-white/90 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-primone/90"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex justify-between items-center">
          <motion.button
            type="button"
            aria-label="Go to the homepage"
            className="cursor-pointer font-heading text-xl font-bold text-gray-900 dark:text-white sm:text-2xl"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => {
              const hero = document.getElementById("hero");
              hero?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Eyob-Se
          </motion.button>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 font-microlab font-medium dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
                whileHover={{ y: -2 }}
                onClick={(event) => handleNavClick(event, item)}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="rounded-lg bg-gray-300 p-2 dark:bg-primthree dark:text-white dark:hover:bg-gray-600 hover:bg-gray-300 transition-colors duration-200"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <button
              className="rounded-lg bg-gray-200 p-2 dark:bg-gray-700 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-lg bg-white p-4 shadow-lg dark:bg-slate-800 md:hidden sm:mt-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
                onClick={(event) => handleNavClick(event, item)}
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
