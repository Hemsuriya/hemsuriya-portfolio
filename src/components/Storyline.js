import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scenes = [
  {
    step: "01",
    title: "Spot the bottleneck",
    eyebrow: "Signal",
    description:
      "I start by finding where teams lose time, clarity, or confidence. In my work, that usually means a slow request path, a noisy service boundary, or a process that should feel automatic but does not.",
    impact: "Find the friction first, then build the shortest path through it.",
    chips: ["Request flow", "API latency", "Problem framing"],
    visual: {
      label: "Trace path",
      mode: "signal",
    },
  },
  {
    step: "02",
    title: "Design the machine",
    eyebrow: "Build",
    description:
      "I shape the architecture around reliability and speed, then split the work into small parts that are easy to test and maintain. That keeps the system useful instead of flashy.",
    impact: "Simple structure, sharp execution, and no unnecessary complexity.",
    chips: ["FastAPI", "Services", "Data flow", "Reliability"],
    visual: {
      label: "Architecture notes",
      mode: "build",
    },
  },
  {
    step: "03",
    title: "Make it feel inevitable",
    eyebrow: "Ship",
    description:
      "Once the core system works, I polish the handoff so it feels obvious to use. The result should look less like software and more like a capability the team suddenly gained.",
    impact: "The interface should make the engineering feel natural.",
    chips: ["Motion", "Feedback", "Micro-interactions", "Clarity"],
    visual: {
      label: "Release flow",
      mode: "ship",
    },
  },
  {
    step: "04",
    title: "Prove the outcome",
    eyebrow: "Scale",
    description:
      "I care about shipping work that can be measured: fewer manual steps, faster response times, better decisions, and less team drag. The story ends with numbers, not vibes.",
    impact: "Measure the lift, then iterate until the lift is obvious.",
    chips: ["Reduction", "Speed", "Throughput", "Adoption"],
    visual: {
      label: "Outcomes",
      mode: "scale",
    },
  },
];

function StoryVisual({ scene }) {
  return (
    <div className={`story-visual story-visual-${scene.visual.mode}`}>
      <div className="story-visual-head">
        <div className="story-visual-tag">{scene.visual.label}</div>
        <div className="story-visual-step">Step {scene.step}</div>
      </div>

      {scene.visual.mode === "signal" && (
        <div className="story-display story-display-signal">
          <div className="service-card service-card-active">
            <span>User</span>
            <strong>Request path</strong>
            <p>Where users wait, click, or drop off.</p>
          </div>
          <div className="service-card">
            <span>API</span>
            <strong>Hot endpoint</strong>
            <p>Which endpoint or service is slowing things down.</p>
          </div>
          <div className="service-card">
            <span>Data</span>
            <strong>Query pressure</strong>
            <p>Which lookup, join, or cache path needs tuning.</p>
          </div>
        </div>
      )}

      {scene.visual.mode === "build" && (
        <div className="story-display story-display-build">
          <div className="code-block">
            <div className="code-line" />
            <div className="code-line short" />
            <div className="code-line medium" />
            <div className="code-line short" />
          </div>
          <div className="stack-panel">
            <div className="stack-item">
              <span>API layer</span>
              <strong>Fast, clear, testable</strong>
            </div>
            <div className="stack-item">
              <span>Services</span>
              <strong>Small, focused, reusable</strong>
            </div>
            <div className="stack-item">
              <span>Data</span>
              <strong>Reliable and easy to trace</strong>
            </div>
          </div>
        </div>
      )}

      {scene.visual.mode === "ship" && (
        <div className="story-display story-display-ship">
          <div className="pipeline-step">Test</div>
          <div className="pipeline-arrow">-&gt;</div>
          <div className="pipeline-step">Build</div>
          <div className="pipeline-arrow">-&gt;</div>
          <div className="pipeline-step">Deploy</div>
          <div className="pipeline-arrow">-&gt;</div>
          <div className="pipeline-step">Monitor</div>
          <div className="release-note">
            <span>Release note</span>
            <strong>Polish the handoff until it feels effortless.</strong>
          </div>
        </div>
      )}

      {scene.visual.mode === "scale" && (
        <div className="story-display story-display-scale">
          <div className="metric-tile">
            <span>Throughput</span>
            <strong>More work, less drag</strong>
          </div>
          <div className="metric-tile">
            <span>Latency</span>
            <strong>Response times down</strong>
          </div>
          <div className="metric-bars">
            <div className="metric-bar" style={{ height: "42%" }} />
            <div className="metric-bar" style={{ height: "58%" }} />
            <div className="metric-bar" style={{ height: "74%" }} />
            <div className="metric-bar" style={{ height: "88%" }} />
          </div>
        </div>
      )}

      <div className="story-visual-footer">
        <span>Sequence</span>
        <strong>{scene.step}</strong>
      </div>
    </div>
  );
}

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
            Click through the sequence to see the concrete software artifact
            behind each phase of the build.
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

              <StoryVisual scene={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default Storyline;
