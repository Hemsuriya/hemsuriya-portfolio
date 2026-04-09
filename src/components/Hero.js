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
      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="pulse" />
        Available for AI / Backend roles
      </motion.div>

      <motion.h1
        className="hero-title gradient-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Hemsuriya M
      </motion.h1>

      <motion.div
        className="hero-avatar-wrap"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.45 }}
      >
        <img
          src="/me.jpg"
          alt="Hemsuriya M portrait"
          className="hero-avatar"
          loading="eager"
        />
      </motion.div>

      <motion.p
        className="hero-role"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        AI Engineer &middot; Backend Developer
      </motion.p>

      <motion.p
        className="hero-desc"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        I build production-ready AI and backend systems that reduce manual work,
        improve hiring decisions, and scale reliably under real traffic.
      </motion.p>

      <motion.ul
        className="hero-proof"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
      >
        <li>Built AI recruitment workflows reducing manual effort by 60%</li>
        <li>Designed backend systems handling high-volume API traffic</li>
        <li>Own features end-to-end from design to production delivery</li>
      </motion.ul>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="mailto:hemsuriya1412@gmail.com?subject=Interview%20Opportunity%20for%20Hemsuriya%20M"
          className="btn"
          onClick={() => trackEvent("cta_book_interview_click", { source: "hero" })}
        >
          Book Interview {"\u2197"}
        </a>
        <a
          href="mailto:hemsuriya1412@gmail.com?subject=Schedule%20a%2015-minute%20Call%20with%20Hemsuriya%20M"
          className="btn btn-outline"
          onClick={() => trackEvent("cta_book_call_click", { source: "hero" })}
        >
          Book a 15-min Call {"\u2197"}
        </a>
        <a
          href="#projects"
          className="btn btn-outline"
          onClick={() => trackEvent("cta_impact_projects_click", { source: "hero" })}
        >
          Impact Projects {"\u2193"}
        </a>
        <a
          href="/Hemsuriya_M%20Final%20Resume.pdf"
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
        transition={{ delay: 0.9 }}
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
    </motion.section>
  );
}

export default Hero;
