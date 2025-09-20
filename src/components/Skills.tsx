import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCursor } from "../context/CursorContext";

const Skills: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "Next.js", level: 85, color: "from-gray-700 to-gray-900" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
        {
          name: "Framer Motion",
          level: 88,
          color: "from-pink-400 to-pink-600",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-400 to-green-600" },
        { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "Express.js", level: 88, color: "from-gray-600 to-gray-800" },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "PostgreSQL",
          level: 88,
          color: "from-indigo-400 to-indigo-600",
        },
        { name: "MongoDB", level: 85, color: "from-green-500 to-green-700" },
        { name: "Redis", level: 80, color: "from-red-400 to-red-600" },
        {
          name: "MySQL",
          level: 90,
          color: "from-emerald-400 to-emerald-600",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "Git", level: 95, color: "from-red-500 to-red-700" },
        { name: "Linux", level: 82, color: "from-yellow-500 to-yellow-700" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 bg-white dark:bg-primthree transition-colors duration-300"
    >
      {[1].map((i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px
      bg-gradient-to-b 
      from-transparent 
      via-black/30 dark:via-white/30 
      to-transparent"
          style={{
            left: `${i * 50}%`,
          }}
        />
      ))}
      {[1].map((i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px
      bg-gradient-to-r 
      from-transparent 
      via-black/30 dark:via-white/30 
      to-transparent"
          style={{
            top: `${i * 26.33}%`,
          }}
        />
      ))}

      {[1].map((i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px
      bg-gradient-to-r 
      from-transparent 
      via-black/30 dark:via-white/30 
      to-transparent "
          style={{
            top: `${i * 73.33}%`,
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

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-intern text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="font-intern text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different
            domains of software development.
          </p>
        </motion.div>

        <div className="font-intern grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-slate-100 to-blue-100 dark:from-primone dark:to-primtwo rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                      <motion.div
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 2,
                          delay: categoryIndex * 0.3 + skillIndex * 0.1,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill icons */}
        <div className="relative mt-16 h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {["⚛️", "🐍", "🐳", "⚡", "🚀", "💾", "🌐", "🔧"].map(
              (icon, index) => (
                <motion.div
                  key={index}
                  className="absolute text-4xl opacity-20 dark:opacity-10"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  style={{
                    left: `${10 + index * 10}%`,
                    top: `${20 + (index % 3) * 20}%`,
                  }}
                >
                  {icon}
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
