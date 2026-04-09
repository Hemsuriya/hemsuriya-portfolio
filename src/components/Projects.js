import { motion } from "framer-motion";
import { trackEvent } from "../utils/analytics";

const projects = [
  {
    title: "AI Recruitment Platform",
    description:
      "An end-to-end hiring platform that automates resume screening, candidate matching, and interview scheduling with LLM workflows.",
    image: "/ai-1.png",
    tags: ["Python", "LangChain", "LLMs", "FastAPI", "React"],
    impact: [
      "Reduced manual screening effort by 60%",
      "Supports high-volume hiring pipelines",
      "Automated candidate ranking in seconds",
    ],
    github: "https://github.com/Hemsuriya/ai-recruitment-system.git",
    demo: null,
    architecture: "FastAPI services + LangChain workflows + React dashboard",
  },
  {
    title: "Hospital Management System",
    description:
      "A full-stack system for managing patient records, appointments, and staff operations with role-based access control.",
    image: "/HMS-1.png",
    tags: ["Django", "MySQL", "REST API", "JavaScript"],
    impact: [
      "Centralized patient and appointment workflow",
      "Improved operational visibility for staff",
      "Reduced manual data handling with REST APIs",
    ],
    github: "https://github.com/hemsuriya",
    demo: null,
    architecture: "Django backend + MySQL data layer + role-based workflows",
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
