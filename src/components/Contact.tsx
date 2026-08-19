import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useCursor } from "../context/CursorContext";

const Contact: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "messieyob346@gmail.com",
      href: "mailto:messieyob346@gmail.com",
      external: false,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 987 123 752",
      href: "tel:+251987123752",
      external: false,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Ethiopia",
      external: true,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Eyob-Se",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/eyobseleshi-dev",
      color: "hover:text-blue-600",
    },
    /*  {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400",
    }, */
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-16 transition-colors duration-300 dark:bg-primone sm:py-24"
    >
      {[1].map((i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px
      bg-gradient-to-r 
      from-transparent 
      via-black/30 dark:via-white/30 
      to-transparent"
          style={{
            top: `${i * 38.33}%`,
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[150px] rounded-full bg-white opacity-50 blur-[140px] pointer-events-none z-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 4, // how long one pulse cycle takes
          repeat: Infinity, // loop forever
          ease: "easeInOut", // smooth fading
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-5 font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Let&apos;s work together.
          </h2>
          <p className="mx-auto mb-2 max-w-2xl font-uibod text-lg font-medium text-gray-800 dark:text-gray-300">
            Have a project in mind or an idea you want to talk through?
          </p>
          <p className="font-uibod text-gray-600 dark:text-gray-400">
            Send me a message and I&apos;ll get back to you.
          </p>
        </motion.div>

        {/* Contact + Socials */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="mb-5 font-heading text-2xl font-bold text-gray-800 dark:text-white">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center rounded-2xl border border-gray-200/80 bg-white/70 px-4 py-3 shadow-sm transition-colors hover:border-blue-200 dark:border-white/10 dark:bg-primthree/60 dark:hover:border-blue-400/30"
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white transition-transform duration-200 group-hover:scale-105">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="ml-4 min-w-0">
                    <p className="font-microlab text-xs uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="break-words font-microlab text-sm text-gray-800 transition-colors duration-200 hover:text-blue-500 dark:text-white"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-gray-200/80 bg-white/60 p-8 text-center shadow-sm dark:border-white/10 dark:bg-primthree/60"
          >
            <h4 className="mb-2 font-heading text-2xl font-semibold text-gray-800 dark:text-white">
              Find me online
            </h4>
            <p className="mb-6 max-w-xs font-microlab text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              You can find more of my work and professional updates here.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500 bg-blue-500 text-white transition-all duration-200 dark:bg-transparent dark:text-blue-400 ${social.color}`}
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
