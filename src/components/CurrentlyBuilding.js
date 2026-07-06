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
      <p className="section-subtitle">What I'm actively pushing toward production right now</p>

      <div className="building-card">
        <div className="building-status">
          <span className="dot" />
          In Progress
        </div>
        <div className="building-title">Automation-First Platform</div>
        <p className="building-desc">
          Developing an end-to-end platform that automates repetitive backend tasks,
          routes data intelligently, and surfaces the right information fast. The
          goal is simple: less manual work, cleaner operations, stronger delivery.
        </p>
        <div className="building-tech">
          <span>FastAPI</span>
          <span>Python</span>
          <span>RAG</span>
          <span>React</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
        </div>
      </div>
    </motion.section>
  );
}

export default CurrentlyBuilding;
