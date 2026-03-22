import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="gradient-text">About Me</h2>

      <p>
        I'm a <b>Software Engineer specializing in AI and backend systems</b>,
        building scalable applications using Python, REST APIs, and microservices.
      </p>

      <p style={{ marginTop: "15px" }}>
        Currently working on <b>AI-powered recruitment systems</b> using LangChain
        and LLMs to automate hiring workflows.
      </p>
    </motion.section>
  );
}

export default About;