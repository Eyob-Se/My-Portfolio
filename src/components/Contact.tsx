import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useCursor } from "../context/CursorContext";

const Contact: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "messieyob346@gmail.com",
      href: "messieyob346@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 987 123 752",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "#",
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
      className="relative py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:bg-gradient-to-br dark:from-primone dark:to-primtwo transition-colors duration-300"
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

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="font-intern text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto mb-2">
            🚀 Let's build something amazing together.
          </p>
          <p className="font-intern text-gray-800 dark:text-gray-300">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </motion.div>

        {/* Contact + Socials */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="font-intern text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center group"
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="w-12 h-12 bg-blue-500 dark:bg-primone rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-200"
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
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Follow Me
            </h4>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-blue-500 dark:bg-primone rounded-lg flex items-center justify-center text-white dark:text-blue-500 ${social.color} transition-all duration-200`}
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon className=" w-6 h-6" />
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
