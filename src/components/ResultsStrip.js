import { motion } from "framer-motion";

const metrics = [
  { value: "60%", label: "less repetitive manual work" },
  { value: "10K+", label: "requests handled per day" },
  { value: "35%", label: "faster SQL execution time" },
  { value: "5K+", label: "daily users supported" },
];

function ResultsStrip() {
  return (
    <motion.section
      className="results-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="results-header">
        <div className="impact-kicker">Proof Of Impact</div>
        <h2 className="section-heading gradient-text">Results That Matter Fast</h2>
        <p className="section-subtitle">
          Clear numbers that show delivery, scale, and business outcome.
        </p>
      </div>

      <div className="results-grid">
        {metrics.map((metric) => (
          <article key={metric.label} className="results-card">
            <div className="results-value">{metric.value}</div>
            <p className="results-label">{metric.label}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export default ResultsStrip;
