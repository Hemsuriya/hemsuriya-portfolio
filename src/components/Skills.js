import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiLangchain,
  SiMysql,
  SiDocker,
  SiJenkins,
  SiApachemaven,
} from "react-icons/si";
import { FaJava, FaAws, FaBrain, FaComments } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Java", Icon: FaJava, color: "#ED8B00" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" },
      { name: "ReactJS", Icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Django", Icon: SiDjango, color: "#44B78B" },
      { name: "Flask", Icon: SiFlask, color: "#FFFFFF" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "LangChain", Icon: SiLangchain, color: "#60A5FA" },
      { name: "LLMs", Icon: FaBrain, color: "#A78BFA" },
      { name: "NLP", Icon: FaComments, color: "#22D3EE" },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
      { name: "Maven", Icon: SiApachemaven, color: "#C71A36" },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <section id="skills">
      <h2 className="section-heading gradient-text">Tech Stack</h2>
      <p className="section-subtitle">Technologies I work with daily</p>

      {skillCategories.map((category) => (
        <div key={category.title} className="skill-category">
          <div className="skill-category-title">{category.title}</div>
          <motion.div
            className="skills-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={item}
                whileHover={{ y: -4 }}
              >
                <span className="skill-icon" aria-hidden="true">
                  <skill.Icon color={skill.color} />
                </span>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
