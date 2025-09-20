import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, X } from "lucide-react";
import { useCursor } from "../context/CursorContext";

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  image: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject!.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === selectedProject!.images.length - 1 ? 0 : prev + 1
    );
  };

  const { setCursorVariant } = useCursor();
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "WebGIS Spatial Data Platform",
      description:
        "An interactive full-stack web-based GIS platform to visualize and manage spatial data.",
      problem:
        "Organizations and researchers struggle to access and analyze spatial data easily without expensive proprietary software.",
      solution:
        "Developed a scalable WebGIS platform with map visualization, spatial querying, and secure data sharing, enabling users to interact with geospatial datasets directly through a modern web interface.",
      techStack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "GeoServer",
        "OpenLayers",
        "Docker",
      ],
      images: ["/propic/ssgi1.png", "/propic/ssgi2.png", "/propic/ssgi3.png"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      image: "/propic/ssgi1.png",
    },
    {
      id: 2,
      title: "Rental System Web App",
      description:
        "A multi-role rental management platform with dashboards for admins, tenants, and property owners.",
      problem:
        "Managing rental workflows and multiple user roles was inefficient and unorganized.",
      solution:
        "Created a scalable system with separate dashboards, approval workflows, notifications, and digital lease management.",
      techStack: ["MySQL", "PHP", "Bootstrap", "CSS3"],
      images: ["/propic/ren1.png", "/propic/ren2.png", "/propic/ren3.png"], // 👈 local screenshot
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      image: "/propic/ren1.png",
    },

    {
      id: 3,
      title: "Translator Web App",
      description:
        "A web application that provides real-time language translation with a clean and user-friendly interface.",
      problem:
        "Users often struggled to quickly translate text between multiple languages without switching apps or services.",
      solution:
        "Built a lightweight translator with instant translations, language auto-detection, and a responsive UI for seamless usage across devices.",
      techStack: ["React", "Python", "FastAPI", "Custom CSS", "MongoDB"],
      images: ["/propic/lan.png"], // replace with your local screenshot
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      image: "/propic/lan.png",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 bg-gray-50 bg-gradient-to-br from-slate-100 to-blue-100 dark:bg-gradient-to-br dark:from-primone dark:to-primtwo transition-colors duration-300"
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
      {[1].map((i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px
      bg-gradient-to-r 
      from-transparent 
      via-black/30 dark:via-white/30 
      to-transparent"
          style={{
            top: `${i * 30.33}%`,
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
            top: `${i * 93.33}%`,
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
            Featured Projects
          </h2>
          <p className="font-intern text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-primthree rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
              whileHover={{ y: -10, rotateY: 5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.featured && (
                  <div className="font-intern absolute top-4 left-4 bg-blue-500 dark:bg-primtwo text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-intern text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="font-intern text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-primtwo gradient-text dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-primtwo text-gray-600 dark:text-gray-400 rounded-full text-xs">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-primthree rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative mb-6">
                  <img
                    src={selectedProject.images[currentImage]}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />

                  {/* Prev Button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70"
                  >
                    ‹
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70"
                  >
                    ›
                  </button>
                </div>

                {/* Thumbnail navigation */}
                <div className="flex gap-2 justify-center">
                  {selectedProject.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`thumb-${index}`}
                      className={`w-16 h-12 object-cover rounded-md cursor-pointer border-2 transition
        ${currentImage === index ? "border-blue-500" : "border-transparent"}`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Problem
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-primone gradient-text dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white rounded-lg hover:bg-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-primone-600 dark:text-white rounded-lg hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
