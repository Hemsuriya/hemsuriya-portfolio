import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="gradient-text"
        whileHover={{ scale: 1.05 }}
      >
        Hemsuriya
      </motion.h1>

      <motion.h2>
        AI Engineer | Backend Developer
      </motion.h2>

      <motion.p>
        Building intelligent AI systems using LLMs.
      </motion.p>

    </motion.section>
  );
}

export default Hero;