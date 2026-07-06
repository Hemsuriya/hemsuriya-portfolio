import { motion } from "framer-motion";

const highlights = [
  { number: "2+", label: "Years Exp." },
  { number: "3+", label: "Production Systems" },
  { number: "20%", label: "API Faster" },
  { number: "300+", label: "People Trained" },
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
      <p className="section-subtitle">Why teams trust me for backend execution and software delivery</p>

      <div className="about-content">
        <div className="about-text">
          <p>
            I am a <strong>Backend Engineer focused on software systems</strong> who turns complex
            requirements into production software that teams can use immediately.
          </p>
          <p>
            I have built <strong>automation-heavy backend platforms</strong> with Python, Django,
            FastAPI, and thoughtful integrations where it makes sense, keeping systems fast,
            maintainable, and useful.
          </p>
          <p>
            My approach is simple: ownership, fast iteration, clean architecture, and measurable
            business impact through APIs, backend performance, and automation that actually gets used.
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
