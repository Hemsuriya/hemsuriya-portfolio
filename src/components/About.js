import { motion } from "framer-motion";

const highlights = [
  { number: "1+", label: "Years Exp." },
  { number: "5+", label: "Projects" },
  { number: "3+", label: "AI Systems" },
  { number: "10K+", label: "API Requests/day" },
];

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-heading gradient-text">About Me</h2>
      <p className="section-subtitle">Why teams hire me for AI + backend execution</p>

      <div className="about-content">
        <div className="about-text">
          <p>
            I am a <strong>Software Engineer focused on AI and backend systems</strong> who
            turns complex requirements into production software that teams can use immediately.
          </p>
          <p>
            I have built <strong>AI-powered recruitment workflows</strong> with LangChain and LLMs
            to automate resume screening, candidate matching, and interview coordination.
          </p>
          <p>
            My approach is simple: ownership, fast iteration, clean architecture, and measurable
            business impact through APIs and backend performance.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              className="highlight-card"
              whileHover={{ y: -3 }}
            >
              <div className="highlight-number">{h.number}</div>
              <div className="highlight-label">{h.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
