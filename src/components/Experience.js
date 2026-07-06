import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cloud BC Labs",
    date: "June 2025 - Present",
    points: [
      "Built backend systems using Python, FastAPI, and modular services",
      "Owned end-to-end development for API design, business logic, and deployment",
      "Shipped production features spanning automation, monitoring, and operational tooling",
    ],
  },
  {
    role: "Associate Software Engineer - Python",
    company: "Test Yantra Software Solutions",
    date: "November 2024 - March 2025",
    points: [
      "Developed scalable backend applications and REST APIs using Python, Django, and Flask",
      "Improved API response time by 20% and reduced SQL query time by 30% through tuning and indexing",
      "Automated build and deployment workflows with Docker, Jenkins, and Git, cutting deployment time by 40%",
    ],
  },
  {
    role: "Junior R&D Engineer Intern",
    company: "Garuda Aerospace Pvt Ltd",
    date: "September 2022 - January 2024",
    points: [
      "Developed IoT-enabled drone monitoring systems with real-time alerting for operational tracking",
      "Delivered technical training to 300+ trainees under RPTO standards and earned a Letter of Appreciation",
      "Supported testing, deployment, and compliance documentation for defense-related use cases",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Experience() {
  return (
    <motion.section
      id="experience"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="section-heading gradient-text">Experience</h2>
      <p className="section-subtitle">Where I've worked and what I've built</p>

      <div className="timeline">
        {experiences.map((exp) => (
          <motion.div key={exp.role} className="timeline-item" variants={item}>
            <div className="card">
              <div className="exp-header">
                <div>
                  <h3>{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <span className="exp-date">{exp.date}</span>
              </div>
              <ul className="exp-list">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
