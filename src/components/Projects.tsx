import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Palette,
  X,
} from "lucide-react";
import { useCursor } from "../context/CursorContext";

type ProjectCategory = "programming" | "design";
type ProjectFilter = ProjectCategory;

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  label: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("programming");
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { setCursorVariant } = useCursor();
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false });

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 1,
      title: "WebGIS Spatial Data Platform",
      category: "programming",
      label: "Web app",
      description: "A web map for viewing and working with spatial data.",
      problem:
        "Organizations and researchers struggle to access and analyze spatial data easily without expensive proprietary software.",
      solution:
        "Built a practical map interface with spatial search, data layers, and secure sharing so people can work with the information in one place.",
      techStack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "GeoServer",
        "OpenLayers",
        "Docker",
      ],
      images: [
        "/Programming/ssgi1.webp",
        "/Programming/ssgi2.webp",
        "/Programming/ssgi3.webp",
      ],
      liveUrl: "https://gns.ssgi.gov.et/",
      githubUrl: "https://github.com/Eyob-Se/SSGI-project",
      image: "/Programming/ssgi1.webp",
    },
    {
      id: 2,
      title: "Rental System Web App",
      category: "programming",
      label: "Management tool",
      description:
        "A rental management tool with separate views for owners, tenants, and administrators.",
      problem:
        "Managing rental workflows and multiple user roles was inefficient and unorganized.",
      solution:
        "Built the dashboards, approval steps, notifications, and digital lease workflow around the way each user actually works.",
      techStack: ["MySQL", "PHP", "Bootstrap", "Custom CSS"],
      images: [
        "/Programming/ren1.webp",
        "/Programming/ren2.webp",
        "/Programming/ren3.webp",
      ],
      image: "/Programming/ren1.webp",
      githubUrl: "https://github.com/Eyob-Se/Rental",
    },
    {
      id: 3,
      title: "Translator Web App",
      category: "programming",
      label: "Small web app",
      description:
        "A simple translation tool for quickly moving between languages without leaving the page.",
      problem:
        "Users often struggled to quickly translate text between multiple languages without switching apps or services.",
      solution:
        "Kept the interface light and responsive, with instant results and language detection built into the experience.",
      techStack: ["React", "Custom CSS"],
      images: ["/Programming/lan.webp"],
      image: "/Programming/lan.webp",
      liveUrl: "https://lang-scribe.netlify.app/",
      githubUrl: "https://github.com/Eyob-Se/Lang-Scribe-pro",
    },
    {
      id: 4,
      title: "CoTM & Natan Campaign Designs",
      category: "design",
      label: "Mockups & social posts",
      description:
        "A CoTM Engineering student shirt mockup paired with a Natan Delivery social media post.",
      problem:
        "Two very different pieces needed to communicate clearly: one for a student project and one for a delivery service.",
      solution:
        "Created a wearable engineering mockup for CoTM and a bold, informative delivery post for Natan, adapting the layout and visual tone to each audience.",
      techStack: ["Mockup design", "Social media design", "Campaign graphics"],
      images: [
        "/Graphics_design/Others/t-shirtr.webp",
        "/Graphics_design/Others/delivery.webp",
      ],
      image: "/Graphics_design/Others/t-shirtr.webp",
    },
    {
      id: 5,
      title: "Kidist Arsema Maheber Fellowship",
      category: "design",
      label: "Fellowship campaign",
      description:
        "A social media design set for the Kidist Arsema Maheber fellowship and its community activities.",
      problem:
        "The fellowship needed a warm, respectful visual style that could carry announcements, stories, and thank-you messages.",
      solution:
        "Built a consistent set of story posts and thank-you cards using the fellowship imagery, logo, typography, and supporting layouts.",
      techStack: [
        "Social media design",
        "Story graphics",
        "Event communication",
      ],
      images: [
        "/Graphics_design/StArsema/post1.webp",
        "/Graphics_design/StArsema/post2.webp",
        "/Graphics_design/StArsema/post3.webp",
        "/Graphics_design/StArsema/TY_card.webp",
      ],
      image: "/Graphics_design/StArsema/TY_card.webp",
    },
    {
      id: 6,
      title: "Tilla Architects & Engineering PLC",
      category: "design",
      label: "Brand & signage",
      description:
        "A practical brand design set covering the logo, social media post, window sticker, and door sticker.",
      problem:
        "The company needed one identity that could work across online promotion and physical spaces.",
      solution:
        "Created a clear architectural identity and applied it across the logo, Instagram post, and branded window and door stickers.",
      techStack: ["Logo design", "Brand identity", "Print & signage"],
      images: [
        "/Graphics_design/Tilla/tilla_post.webp",
        "/Graphics_design/Tilla/tilla_logo.webp",
        "/Graphics_design/Tilla/tilla_sticker.webp",
      ],
      image: "/Graphics_design/Tilla/tilla_post.webp",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter,
  );

  const openProject = (project: Project) => {
    setCurrentImage(0);
    setSelectedProject(project);
  };

  const closeProject = () => setSelectedProject(null);

  const handlePrev = () => {
    if (!selectedProject) return;
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    if (!selectedProject) return;
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1,
    );
  };

  const filters: {
    value: ProjectFilter;
    label: string;
    count: number;
    icon: typeof Code2;
  }[] = [
    {
      value: "programming",
      label: "Programming",
      count: projects.filter((project) => project.category === "programming")
        .length,
      icon: Code2,
    },
    {
      value: "design",
      label: "Graphic design",
      count: projects.filter((project) => project.category === "design").length,
      icon: Palette,
    },
  ];

  const categoryDetails = {
    programming: {
      description: "Web applications, interfaces, and backend systems.",
      services: ["Frontend", "Backend", "Databases"],
    },
    design: {
      description:
        "Posts, logos, story graphics, and practical brand materials.",
      services: [
        "Posts & stories",
        "Logo design",
        "Brand identity",
        "Print & signage",
      ],
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden bg-slate-50 py-24 transition-colors duration-300 dark:bg-primone"
    >
      {[1, 2].map((i) => (
        <div
          key={`v-${i}`}
          className="pointer-events-none absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent dark:via-white/20"
          style={{ left: `${i * 33.33}%` }}
        />
      ))}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[180px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/50 opacity-30 blur-[150px] dark:bg-blue-500/10"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 font-microlab text-sm font-medium uppercase tracking-[0.28em] text-blue-500 dark:text-blue-400">
              A few things I've made
            </p>
            <h2 className="mb-5 font-heading text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Some work I'm <span className="text-blue-500">proud of.</span>
            </h2>
            <p className="font-uibod text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Web apps, systems, and a few visual experiments. Each one started
              with a problem worth solving.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/60 bg-white/50 p-2 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 font-microlab text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gray-900 text-white shadow-lg dark:bg-white dark:text-gray-900"
                      : "text-gray-600 hover:bg-white hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Icon className="h-4 w-4" />
                  {filter.label}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                      isActive
                        ? "bg-white/15 text-white dark:bg-gray-900/10 dark:text-gray-900"
                        : "bg-gray-900/5 text-gray-500 dark:bg-white/10 dark:text-gray-400"
                    }`}
                  >
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="mb-6 flex flex-col gap-4 border-b border-gray-900/10 pb-4 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 font-microlab text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredProjects.length}{" "}
              {activeFilter === "programming"
                ? "programming projects"
                : "design projects"}
            </p>
            <p className="font-uibod text-sm text-gray-600 dark:text-gray-300">
              {categoryDetails[activeFilter].description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categoryDetails[activeFilter].services.map((service) => (
              <span
                key={service}
                className="rounded-full bg-gray-100 px-3 py-1 font-microlab text-xs text-gray-500 dark:bg-white/10 dark:text-gray-400"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-lg shadow-blue-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 dark:border-white/10 dark:bg-primthree/90"
                onClick={() => openProject(project)}
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/5 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-gray-950/35 px-3 py-1.5 font-microlab text-xs text-white backdrop-blur-md">
                    {project.category === "programming" ? (
                      <Code2 className="h-3.5 w-3.5 text-blue-300" />
                    ) : (
                      <Palette className="h-3.5 w-3.5 text-blue-300" />
                    )}
                    {project.category === "programming"
                      ? "Programming"
                      : "Graphic design"}
                  </div>
                  <ArrowUpRight className="absolute bottom-4 right-4 h-5 w-5 text-white opacity-70 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  <p className="absolute bottom-4 left-5 font-microlab text-xs uppercase tracking-[0.18em] text-white/70">
                    {project.label}
                  </p>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 font-heading text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-500 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-5 line-clamp-2 font-microlab text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-50 px-3 py-1 font-microlab text-xs font-medium text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 font-microlab text-xs text-gray-500 dark:bg-white/10 dark:text-gray-400">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {project.category === "programming" && (
                    <div
                      className="mt-5 flex flex-wrap gap-2 border-t border-gray-900/10 pt-4 dark:border-white/10"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-lg bg-blue-500 px-3 py-2 font-microlab text-sm font-medium text-white transition hover:bg-blue-600"
                          onMouseEnter={() => setCursorVariant("button")}
                          onMouseLeave={() => setCursorVariant("default")}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-2 font-microlab text-sm font-medium text-gray-400 dark:bg-white/10 dark:text-gray-500">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Demo unavailable
                        </span>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-lg bg-gray-900 px-3 py-2 font-microlab text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white/10 dark:hover:bg-white/20"
                          onMouseEnter={() => setCursorVariant("button")}
                          onMouseLeave={() => setCursorVariant("default")}
                        >
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-2 font-microlab text-sm font-medium text-gray-400 dark:bg-white/10 dark:text-gray-500">
                          <Github className="h-3.5 w-3.5" />
                          Code unavailable
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {typeof document !== "undefined" &&
          createPortal(
            <AnimatePresence>
              {selectedProject && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                  onClick={closeProject}
                >
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.92, opacity: 0 }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="project-dialog-title"
                    className="max-h-[90vh] w-full max-w-3xl overscroll-contain overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl dark:bg-primthree sm:p-7"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 font-microlab text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
                          {selectedProject.category === "programming"
                            ? "Programming"
                            : "Graphic design"}
                        </p>
                        <h3
                          id="project-dialog-title"
                          className="font-heading text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl"
                        >
                          {selectedProject.title}
                        </h3>
                      </div>
                      <button
                        type="button"
                        aria-label="Close project details"
                        onClick={closeProject}
                        className="rounded-xl p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white/10 dark:hover:text-white"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="relative mb-4 flex min-h-[280px] max-h-[70vh] items-center justify-center overflow-hidden rounded-xl bg-gray-100 p-2 dark:bg-gray-900 sm:min-h-[360px]">
                      <img
                        src={selectedProject.images[currentImage]}
                        alt={selectedProject.title}
                        decoding="async"
                        className="max-h-[68vh] max-w-full object-contain"
                      />
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            aria-label="Previous image"
                            onClick={handlePrev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/75"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            type="button"
                            aria-label="Next image"
                            onClick={handleNext}
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/75"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>

                    {selectedProject.images.length > 1 && (
                      <div className="mb-7 flex justify-center gap-2">
                        {selectedProject.images.map((image, index) => (
                          <button
                            type="button"
                            key={image}
                            aria-label={`Show image ${index + 1}`}
                            onClick={() => setCurrentImage(index)}
                            className={`overflow-hidden rounded-lg border-2 transition ${
                              currentImage === index
                                ? "border-blue-500"
                                : "border-transparent"
                            }`}
                          >
                            <img
                              src={image}
                              alt=""
                              loading="lazy"
                              decoding="async"
                              className="h-12 w-16 bg-gray-100 object-contain dark:bg-gray-900"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-heading font-semibold text-gray-900 dark:text-white">
                          The problem
                        </h4>
                        <p className="font-microlab text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                          {selectedProject.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-heading font-semibold text-gray-900 dark:text-white">
                          What I did
                        </h4>
                        <p className="font-microlab text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-gray-900/10 pt-5 dark:border-white/10">
                      <h4 className="mb-3 font-heading font-semibold text-gray-900 dark:text-white">
                        Tools used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-blue-50 px-3 py-1.5 font-microlab text-xs font-medium text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.category === "programming" && (
                      <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-900/10 pt-5 dark:border-white/10">
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 font-microlab text-sm font-medium text-white transition hover:bg-blue-600"
                            onMouseEnter={() => setCursorVariant("button")}
                            onMouseLeave={() => setCursorVariant("default")}
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        )}
                        {!selectedProject.liveUrl && (
                          <button
                            type="button"
                            disabled
                            className="flex cursor-not-allowed items-center gap-2 rounded-xl bg-gray-200 px-4 py-2.5 font-microlab text-sm font-medium text-gray-500 dark:bg-white/10 dark:text-gray-400"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo unavailable
                          </button>
                        )}
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 font-microlab text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white/10 dark:hover:bg-white/20"
                            onMouseEnter={() => setCursorVariant("button")}
                            onMouseLeave={() => setCursorVariant("default")}
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        )}
                        {!selectedProject.githubUrl && (
                          <button
                            type="button"
                            disabled
                            className="flex cursor-not-allowed items-center gap-2 rounded-xl bg-gray-200 px-4 py-2.5 font-microlab text-sm font-medium text-gray-500 dark:bg-white/10 dark:text-gray-400"
                          >
                            <Github className="h-4 w-4" />
                            Code unavailable
                          </button>
                        )}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body,
          )}
      </div>
    </section>
  );
};

export default Projects;
