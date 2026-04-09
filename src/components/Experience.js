import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cloud BC Labs",
    date: "June 2024 - Current",
    points: [
      "Developed AI recruitment platform using LangChain & LLMs",
      "Designed scalable microservices architecture handling 10K+ requests/day",
      "Built automation workflows for hiring pipelines reducing manual effort by 60%",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Test Yantra",
    date: "November 2023 - May 2024",
    points: [
      "Improved backend performance by 20% through caching & query optimization",
      "Developed REST APIs using Django & Flask serving 5K+ daily users",
      "Optimized SQL queries reducing average execution time by 35%",
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

