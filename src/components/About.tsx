import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Globe, Zap } from "lucide-react";
import { useCursor } from "../context/CursorContext";

const About: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const skills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "Node.js", level: 90, color: "bg-blue-500" },
    { name: "PostgreSQL", level: 85, color: "bg-blue-500" },
    { name: "Docker", level: 80, color: "bg-blue-500" },
    { name: "TypeScript", level: 88, color: "bg-blue-500" },
    { name: "Python", level: 82, color: "bg-blue-500" },
  ];

  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Creating beautiful, responsive user interfaces with modern frameworks",
    },
    {
      icon: Database,
      title: "Backend Architecture",
      description: "Building robust APIs and scalable server-side applications",
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end development from concept to deployment",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring fast, efficient, and scalable applications",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 bg-white dark:bg-primthree transition-colors duration-300"
    >
      {[1, 2].map((i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px
      bg-gradient-to-b 
      from-transparent 
      via-black/30 dark:via-white/30 
      to-transparent"
          style={{
            left: `${i * 33.33}%`,
          }}
        />
      ))}

      {/* Horizontal lines */}
      {[1, 2].map((i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px
      bg-gradient-to-r 
      from-transparent 
      via-black/30 dark:via-white/30 
      to-transparent"
          style={{
            top: `${i * 33.33}%`,
          }}
        />
      ))}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[150px] rounded-full bg-[#EEEACA] opacity-30 blur-[150px] pointer-events-none z-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 4, // how long one pulse cycle takes
          repeat: Infinity, // loop forever
          ease: "easeInOut", // smooth fading
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-intern text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="font-intern text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I specialize in designing and developing full-stack applications
              that merge creativity with functionality. From crafting sleek user
              interfaces to architecting robust backends, I bring ideas to life
              through clean code and modern technology.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-namefont text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Skills & Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
                className="font-namefont p-6  bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-primone dark:to-primtwo rounded-xl hover:shadow-lg transition-all duration-200 group"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <feature.icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="font-intern text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
