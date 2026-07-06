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
        <h3>Cut manual operations by 60% with automation workflows</h3>
        <p>
          Built and shipped backend automation pipelines that helped teams work
          faster, reduce repetitive effort, and make better decisions in less time.
        </p>
      </div>
    </motion.section>
  );
}

export default FeaturedImpact;
