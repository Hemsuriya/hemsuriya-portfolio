import { motion } from "framer-motion";

const items = [
  { label: "Location", value: "Bangalore, India (IST)" },
  { label: "Role Focus", value: "Backend Engineer / AI Systems Builder" },
  { label: "Notice Period", value: "30 days" },
  { label: "Availability", value: "Open to relocate and actively exploring" },
  { label: "Strength", value: "Python, Django, FastAPI, LangChain" },
  { label: "Response Time", value: "Usually within 24 hours" },
];

function RecruiterSnapshot() {
  return (
    <motion.section
      id="recruiter-snapshot"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="section-heading gradient-text">Recruiter Snapshot</h2>
      <p className="section-subtitle">Quick facts to evaluate fit in under a minute</p>

      <div className="snapshot-grid">
        {items.map((item) => (
          <div key={item.label} className="snapshot-card">
            <div className="snapshot-label">{item.label}</div>
            <div className="snapshot-value">{item.value}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default RecruiterSnapshot;
