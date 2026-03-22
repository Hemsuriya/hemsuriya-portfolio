import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0 }
};

function Projects() {
  return (
    <motion.section
      id="projects"
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      <h2 className="gradient-text">Projects</h2>

      <div className="grid">

        <motion.div
          className="card"
          variants={item}
          whileHover={{
            scale: 1.05,
            rotateX: 8,
            rotateY: -8
          }}
        >
          <img src="/ai-1.png" alt="AI Recruitment Platform"/>
          <h3>AI Recruitment Platform</h3>
        </motion.div>

        <motion.div
          className="card"
          variants={item}
          whileHover={{
            scale: 1.05,
            rotateX: 8,
            rotateY: -8
          }}
        >
          <img src="/HMS-1.png" alt="Hospital Management System"/>
          <h3>Hospital Management System</h3>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Projects;