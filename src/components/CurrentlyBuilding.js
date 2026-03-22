import { motion } from "framer-motion";

function CurrentlyBuilding() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="gradient-text">🚀 Currently Building</h2>

      <div className="card">
        <p>
          Developing an <b>AI recruitment system</b> using LangChain and LLMs,
          automating resume screening and interview workflows.
        </p>
      </div>
    </motion.section>
  );
}

export default CurrentlyBuilding;