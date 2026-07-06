import { motion } from "framer-motion";
import { trackEvent } from "../utils/analytics";

const projects = [
  {
    title: "Workflow Automation Platform",
    description:
      "An end-to-end backend platform that automates repetitive operations, routes data intelligently, and keeps processes moving fast.",
    image: "/ai-1.png",
    tags: ["Python", "FastAPI", "React", "Automation", "Systems"],
    impact: [
      "Reduced repetitive manual work by 60%",
      "Automated critical backend workflows",
      "Built for high-throughput operations",
    ],
    github: "https://github.com/Hemsuriya",
    demo: null,
    architecture: "FastAPI services + event-driven workflows + React dashboard",
  },
  {
    title: "Hospital Management System",
    description:
      "A full-stack system for managing patient records, appointments, billing, and staff operations with role-based access control.",
    image: "/HMS-1.png",
    tags: ["Django", "MySQL", "REST API", "Python", "JavaScript"],
    impact: [
      "Centralized patient and appointment workflow",
      "Reduced manual data handling with REST APIs",
      "Improved operational visibility for staff",
    ],
    github: "https://github.com/hemsuriya",
    demo: null,
    architecture: "Django backend + MySQL data layer + role-based workflows",
  },
  {
    title: "IoT Drone Monitoring System",
    description:
      "A real-time monitoring system for drone operations with live alerts, operational tracking, and clear data visibility.",
    image: "/ai-2.png",
    tags: ["IoT", "Python", "Monitoring", "Alerts", "Systems"],
    impact: [
      "Delivered real-time alerting for operational data",
      "Designed for field visibility and fast response",
      "Aligned with production workflows",
    ],
    github: "https://github.com/hemsuriya",
    demo: null,
    architecture: "IoT sensors + monitoring workflows + alerting layer",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Projects() {
  return (
    <motion.section
      id="projects"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="section-heading gradient-text">Impact Projects</h2>
      <p className="section-subtitle">Production-focused work with clear business outcomes</p>

      <div className="grid">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="card project-card"
            variants={item}
            whileHover={{ y: -8 }}
          >
            <div style={{ overflow: "hidden" }}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags" style={{ marginBottom: "12px" }}>
                {project.impact.map((point) => (
                  <span key={point} className="project-tag">
                    {point}
                  </span>
                ))}
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="project-architecture">{project.architecture}</p>
              <div className="project-links">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-link-primary"
                    onClick={() =>
                      trackEvent("project_demo_click", { project: project.title })
                    }
                  >
                    Live Demo {"\u2197"}
                  </a>
                ) : (
                  <span className="project-link project-link-muted">
                    Live demo available on request
                  </span>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  onClick={() =>
                    trackEvent("project_code_click", { project: project.title })
                  }
                >
                  View Code {"\u2197"}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
