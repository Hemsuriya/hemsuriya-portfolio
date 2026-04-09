import { motion } from "framer-motion";
import { trackEvent } from "../utils/analytics";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="contact-card">
        <h2 className="gradient-text">Hire Me</h2>
        <p>
          Open to AI Engineer and Backend Developer roles. I usually respond
          within 24 hours for interviews and collaboration opportunities.
        </p>
        <div className="contact-facts">
          <div className="contact-fact">
            <span>Location</span>
            <strong>Bengaluru, India</strong>
          </div>
          <div className="contact-fact">
            <span>Work Preference</span>
            <strong>Remote, hybrid, or on-site</strong>
          </div>
          <div className="contact-fact">
            <span>Best Fit</span>
            <strong>AI platforms, backend APIs, automation systems</strong>
          </div>
        </div>
        <p>
          Phone: <a href="tel:+917899815832">+91 7899815832</a>
        </p>

        <div className="contact-links">
          <a
            href="mailto:hemsuriya1412@gmail.com"
            className="btn"
            onClick={() => trackEvent("contact_email_click", { source: "contact" })}
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/hemsuriya-m-a4a976301"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            onClick={() => trackEvent("contact_linkedin_click", { source: "contact" })}
          >
            LinkedIn {"\u2197"}
          </a>
          <a
            href="https://github.com/hemsuriya"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            onClick={() => trackEvent("contact_github_click", { source: "contact" })}
          >
            GitHub {"\u2197"}
          </a>
          <a
            href="/Hemsuriya_M%20Final%20Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            onClick={() => trackEvent("contact_resume_click", { source: "contact" })}
          >
            Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
