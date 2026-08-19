import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Braces, Database, Layers3, Server, Wrench } from "lucide-react";
import { useCursor } from "../context/CursorContext";

const Skills: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false });

  const skillCategories = [
    {
      title: "Frontend craft",
      eyebrow: "Interfaces",
      description:
        "Responsive, accessible interfaces with a considered visual rhythm.",
      icon: Braces,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend systems",
      eyebrow: "Architecture",
      description:
        "Reliable APIs and server-side foundations that grow with the product.",
      icon: Server,
      skills: ["Node.js", "Python", "Express.js", "REST APIs"],
    },
    {
      title: "Data foundations",
      eyebrow: "Persistence",
      description:
        "Structured data models and practical storage choices for real workflows.",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "GeoServer"],
    },
    {
      title: "Delivery toolkit",
      eyebrow: "Workflow",
      description:
        "A calm, repeatable workflow from local development to deployment.",
      icon: Wrench,
      skills: ["Docker", "Git", "Linux"],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden bg-white py-16 transition-colors duration-300 dark:bg-primthree sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:72px_72px] dark:opacity-20 dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-[180px] w-[900px] -translate-x-1/2 rounded-full bg-blue-200/50 blur-[150px] dark:bg-blue-500/10"
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 font-microlab text-sm font-medium uppercase tracking-[0.28em] text-blue-500 dark:text-blue-400">
            The toolkit
          </p>
          <h2 className="mb-5 font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Skills that support the{" "}
            <span className="gradient-text">whole picture.</span>
          </h2>
          <p className="font-uibod text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I bring design awareness and engineering discipline together to
            create digital experiences that feel clear, capable, and complete.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: categoryIndex * 0.08 }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-gradient-to-br from-slate-50 to-blue-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-900/10 dark:border-white/10 dark:from-primone dark:to-primtwo"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-blue-500" />
                <div className="mb-7 flex items-start justify-between">
                  <div className="rounded-xl bg-blue-500 p-3 text-white shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-microlab text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                    0{categoryIndex + 1}
                  </span>
                </div>
                <p className="mb-2 font-microlab text-xs font-medium uppercase tracking-[0.18em] text-blue-500 dark:text-blue-400">
                  {category.eyebrow}
                </p>
                <h3 className="mb-3 font-heading text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="mb-6 min-h-[72px] font-microlab text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 border-t border-gray-900/10 pt-5 dark:border-white/10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-white/80 px-2.5 py-1.5 font-microlab text-xs font-medium text-gray-700 shadow-sm dark:bg-white/10 dark:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-blue-200/70 bg-blue-50/70 px-5 py-4 text-center dark:border-blue-400/10 dark:bg-blue-400/5"
        >
          <Layers3 className="h-5 w-5 shrink-0 text-blue-500" />
          <p className="font-microlab text-sm text-gray-600 dark:text-gray-300">
            Always learning, always refining — the stack evolves, but the focus
            stays on useful experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
