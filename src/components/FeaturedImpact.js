import { motion } from "framer-motion";

function FeaturedImpact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="impact-banner">
        <div className="impact-kicker">Featured Achievement</div>
        <h3>Reduced hiring screening effort by 60% with AI workflows</h3>
        <p>
          Built and shipped LLM-powered ranking and matching pipelines that helped
          teams shortlist better candidates faster.
        </p>
      </div>
    </motion.section>
  );
}

export default FeaturedImpact;