import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useCursor } from "../context/CursorContext";

const Hero: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false, amount: 0.7 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100 dark:from-primone dark:to-primtwo"
    >
      {/* Vertical lines */}
      {[1, 2].map((i) => (
        <div
          key={`v-${i}`}
          className={`
      absolute top-0 bottom-0 w-px
      bg-gradient-to-b 
      from-transparent 
      via-black/30 dark:via-white/30 
      to-transparent
    `}
          style={{ left: `${i * 33.33}%` }}
        />
      ))}

      {/* Horizontal lines */}
      {[1, 2].map((i) => (
        <div
          key={`h-${i}`}
          className={`
      absolute left-0 right-0 h-px
      bg-gradient-to-r 
      from-transparent 
      via-black/30 dark:via-white/30 
      to-transparent
    `}
          style={{ top: `${i * 33.33}%` }}
        />
      ))}

      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[150px] rounded-full bg-white opacity-50 blur-[140px] pointer-events-none z-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 4, // how long one pulse cycle takes
          repeat: Infinity, // loop forever
          ease: "easeInOut", // smooth fading
        }}
      />
      <motion.div
        className="container mx-auto px-6 text-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="mb-4 text-4xl font-bold sm:text-5xl md:text-7xl"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <motion.div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-blue-500 sm:h-32 sm:w-32">
                <img
                  src="/1.webp"
                  alt="Eyob Seleshi"
                  className="absolute w-full h-full object-contain"
                  style={{
                    top: "17%",
                    left: "0",
                    transform: "scale(1.5)",
                  }}
                />
              </div>

              <span className="text-gray-800 dark:text-white font-heading">
                {" "}
                Hi, I'm{" "}
              </span>
              <span className="text-[#3b82f6] font-heading font-medium">
                Eyob Seleshi
              </span>
            </motion.div>
          </motion.h1>

          <motion.h2
            className="mb-6 px-2 font-uibod text-xl font-normal text-gray-700 dark:text-gray-300 sm:text-2xl md:text-4xl"
            variants={itemVariants}
          >
            Turning ideas into powerful digital experiences
          </motion.h2>

          <motion.p
            className="mx-auto max-w-3xl px-2 font-microlab text-base text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl"
            variants={itemVariants}
          >
            Software Engineer & Full-Stack Developer passionate about building
            scalable web apps, immersive UI/UX, and seamless digital solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="font-microlab flex flex-wrap justify-center gap-4 mb-11"
        >
          <motion.button
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 glow-effect hover:shadow-xl sm:px-8 sm:py-4"
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </motion.button>

          <motion.button
            className="rounded-lg border-2 border-blue-500 bg-transparent px-6 py-3 font-semibold text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white dark:text-white sm:px-8 sm:py-4"
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Hire Me
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/Eyob-Se" },
            { icon: Linkedin, href: "https://linkedin.com/in/eyobseleshi-dev" },
            { icon: Mail, href: "mailto:messieyob346@gmail.com" },
          ].map((social, index) => {
            const isExternal = social.href.startsWith("http");
            return (
              <motion.a
                key={index}
                href={social.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="p-3 bg-blue-600/40 dark:bg-slate-500/10 backdrop-blur-sm rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <social.icon className="w-6 h-6 text-slate-700 dark:text-gray-300" />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-bounce"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown
            className="w-8 h-8 mx-auto cursor-pointer text-gray-600 dark:text-gray-400"
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
