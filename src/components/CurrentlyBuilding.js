import { motion } from "framer-motion";

function CurrentlyBuilding() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-heading gradient-text">Currently Building</h2>
      <p className="section-subtitle">What I'm actively working on right now</p>

      <div className="building-card">
        <div className="building-status">
          <span className="dot" />
          In Progress
        </div>
        <div className="building-title">AI Recruitment System</div>
        <p className="building-desc">
          Developing an end-to-end AI-powered recruitment platform that automates
          resume screening, candidate-job matching, and interview scheduling using
          LangChain and large language models. The system processes hundreds of
          applications and surfaces the best candidates in seconds.
        </p>
        <div className="building-tech">
          <span>LangChain</span>
          <span>GPT-4</span>
          <span>FastAPI</span>
          <span>React</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
        </div>
      </div>
    </motion.section>
  );
}

export default CurrentlyBuilding;
