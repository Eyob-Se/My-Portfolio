import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Compass,
  Database,
  Layers3,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";
import { useCursor } from "../context/CursorContext";

const About: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false });

  const services = [
    {
      icon: Code2,
      title: "Web development",
      description: "Responsive interfaces and reliable frontend code.",
    },
    {
      icon: Database,
      title: "Backend systems",
      description: "APIs, databases, and tools that support the product.",
    },
    {
      icon: Palette,
      title: "Visual design",
      description: "Simple visuals that make information easier to use.",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Built for momentum",
      description: "Practical solutions that move from idea to working product without unnecessary complexity.",
    },
    {
      icon: Layers3,
      title: "Design-aware code",
      description: "Thoughtful visual decisions carried through into clean, maintainable implementation.",
    },
    {
      icon: Compass,
      title: "Clear collaboration",
      description: "Simple communication, visible progress, and a shared understanding of the goal.",
    },
    {
      icon: Sparkles,
      title: "Details with purpose",
      description: "Polished interactions that support the experience rather than distract from it.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-primthree"
    >
      {[1, 2].map((i) => (
        <div
          key={`v-${i}`}
          className="pointer-events-none absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-black/15 to-transparent dark:via-white/15"
          style={{ left: `${i * 33.33}%` }}
        />
      ))}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-[180px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100 blur-[150px] dark:bg-blue-500/10"
        animate={{ opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 font-microlab text-sm font-medium uppercase tracking-[0.28em] text-blue-500 dark:text-blue-400">
            A little about me
          </p>
          <h2 className="mb-5 font-heading text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Thoughtful work, from <span className="gradient-text">both sides.</span>
          </h2>
          <p className="font-uibod text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I specialize in full-stack development and visual design — bringing
            creativity and functionality together to make digital products feel
            natural to use and satisfying to experience.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl bg-gray-900 p-7 text-white shadow-2xl shadow-blue-900/10 sm:p-9"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-10 flex items-center justify-between">
                <span className="rounded-full border border-white/20 px-4 py-2 font-microlab text-xs uppercase tracking-[0.2em] text-white/70">
                  What I do
                </span>
                <Code2 className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="mb-5 max-w-md font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Web development with a design mindset.
              </h3>
              <p className="mb-10 max-w-md font-microlab text-sm leading-relaxed text-white/65">
                I work on both the design and the code, so the final product is
                clear to use and dependable behind the scenes.
              </p>
              <div className="mt-auto space-y-5 border-t border-white/15 pt-6">
                {services.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.35 + index * 0.1 }}
                      className="flex gap-4"
                      onMouseEnter={() => setCursorVariant("button")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-heading font-semibold">{item.title}</h4>
                        <p className="font-microlab text-xs leading-relaxed text-white/55">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.25 + index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-gray-200/80 bg-gradient-to-br from-slate-50 to-blue-50 p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-900/10 dark:border-white/10 dark:from-primone dark:to-primtwo"
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="mb-8 flex items-start justify-between">
                    <div className="rounded-xl bg-white p-3 text-blue-500 shadow-sm transition duration-300 group-hover:scale-110 dark:bg-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-microlab text-xs text-gray-400">0{index + 1}</span>
                  </div>
                  <h4 className="mb-3 font-heading text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="font-microlab text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
