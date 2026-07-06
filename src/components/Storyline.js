import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scenes = [
  {
    step: "01",
    title: "Spot the bottleneck",
    eyebrow: "Signal",
    description:
      "I start by finding the point where teams lose time, clarity, or confidence. In my work, that usually means hiring workflows, backend latency, or systems that feel manual when they should feel intelligent.",
    impact: "Find the friction first, then build the shortest path through it.",
    chips: ["Workflow mapping", "Latency tracing", "Problem framing"],
  },
  {
    step: "02",
    title: "Design the machine",
    eyebrow: "Build",
    description:
      "I shape the architecture around reliability and speed, then layer in AI only where it genuinely improves the outcome. That keeps the system useful instead of flashy.",
    impact: "Simple structure, sharp execution, and no unnecessary complexity.",
    chips: ["FastAPI", "LangChain", "Data flow", "RAG"],
  },
  {
    step: "03",
    title: "Make it feel inevitable",
    eyebrow: "Ship",
    description:
      "Once the core system works, I polish the interaction model so it feels obvious to use. The result should look less like software and more like a capability the team suddenly gained.",
    impact: "The interface should make the intelligence feel natural.",
    chips: ["Motion", "Feedback", "Micro-interactions", "Clarity"],
  },
  {
    step: "04",
    title: "Prove the outcome",
    eyebrow: "Scale",
    description:
      "I care about shipping work that can be measured: fewer manual steps, faster response times, better decisions, and less team drag. The story ends with numbers, not vibes.",
    impact: "Measure the lift, then iterate until the lift is obvious.",
    chips: ["Reduction", "Speed", "Throughput", "Adoption"],
  },
];

function Storyline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = scenes[activeIndex];

  return (
    <motion.section
      id="story"
      className="story-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="story-shell">
        <div className="story-header">
          <div className="impact-kicker">Interactive Storyline</div>
          <h2 className="section-heading gradient-text">How the work unfolds</h2>
          <p className="section-subtitle">
            Click through the sequence to see how I turn a messy idea into a
            high-signal product story.
          </p>
        </div>

        <div className="story-grid">
          <div className="story-steps">
            {scenes.map((scene, index) => (
              <button
                key={scene.step}
                type="button"
                className={`story-step ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="story-step-number">{scene.step}</span>
                <span className="story-step-label">{scene.eyebrow}</span>
                <span className="story-step-title">{scene.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.step}
              className="story-panel"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              <div className="story-panel-badge">{active.eyebrow}</div>
              <h3>{active.title}</h3>
              <p>{active.description}</p>

              <div className="story-impact">
                <span>Why it matters</span>
                <strong>{active.impact}</strong>
              </div>

              <div className="story-chips">
                {active.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>

              <div className="story-visual">
                <div className="story-visual-core" />
                <div className="story-ripple story-ripple-one" />
                <div className="story-ripple story-ripple-two" />
                <div className="story-metric">
                  <span>Sequence</span>
                  <strong>{active.step}</strong>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default Storyline;
