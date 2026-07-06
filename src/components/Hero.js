import { motion } from "framer-motion";
import { trackEvent } from "../utils/analytics";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="pulse" />
            Open to high-impact software engineering roles
          </motion.div>

          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
          >
            Hemsuriya Manikandan
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I build software that makes teams move faster.
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Software Engineer &middot; Backend Builder
          </motion.p>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I turn messy requirements into polished products that feel obvious
            to use and difficult to ignore. Think production backend systems,
            automation, and interfaces that make the work look effortless.
          </motion.p>

          <motion.div
            className="hero-chips"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.64 }}
          >
            <span>Backend Systems</span>
            <span>Fast APIs</span>
            <span>Automation</span>
          </motion.div>

          <motion.ul
            className="hero-proof"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
          >
            <li>Built software systems that cut manual work and sped up delivery</li>
            <li>Improved API response time by 20% and SQL performance by 30%</li>
            <li>Trained 300+ people and shipped systems used in production</li>
          </motion.ul>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.74 }}
          >
            <a
              href="mailto:hemsuriya1412@gmail.com?subject=Interview%20Opportunity%20for%20Hemsuriya%20Manikandan"
              className="btn"
              onClick={() => trackEvent("cta_book_interview_click", { source: "hero" })}
            >
              Email Me {"\u2197"}
            </a>
            <a
              href="#projects"
              className="btn btn-outline"
              onClick={() => trackEvent("cta_impact_projects_click", { source: "hero" })}
            >
              See the Work {"\u2193"}
            </a>
            <a
              href="/Hemsuriya_M_CV_India.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              onClick={() => trackEvent("cta_resume_click", { source: "hero" })}
            >
              Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.92 }}
          >
            <a
              href="https://github.com/hemsuriya"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("social_github_click", { source: "hero" })}
            >
              GitHub {"\u2197"}
            </a>
            <a
              href="https://www.linkedin.com/in/hemsuriya-m-a4a976301"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("social_linkedin_click", { source: "hero" })}
            >
              LinkedIn {"\u2197"}
            </a>
            <a
              href="mailto:hemsuriya1412@gmail.com"
              onClick={() => trackEvent("social_email_click", { source: "hero" })}
            >
              Email {"\u2197"}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.45 }}
        >
              <div className="hero-panel-top">
                <span className="hero-panel-label">Signal / Snapshot</span>
                <span className="hero-panel-status">Ready to hire</span>
              </div>

          <div className="hero-avatar-wrap">
            <img
              src="/me.jpg"
              alt="Hemsuriya Manikandan portrait"
              className="hero-avatar"
              loading="eager"
            />
          </div>

          <div className="hero-panel-name">Hemsuriya Manikandan</div>
          <p className="hero-panel-copy">
            Backend engineer who likes sharp systems, clean execution, and work
            that makes teams feel instantly more capable.
          </p>

          <div className="hero-signal-grid">
            <div className="hero-signal-card">
              <span>Built</span>
              <strong>Backend platforms</strong>
            </div>
            <div className="hero-signal-card">
              <span>Improved</span>
              <strong>APIs and SQL performance</strong>
            </div>
            <div className="hero-signal-card">
              <span>Delivered</span>
              <strong>Training to 300+ people</strong>
            </div>
            <div className="hero-signal-card">
              <span>Style</span>
              <strong>Systems-first, production-minded</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
