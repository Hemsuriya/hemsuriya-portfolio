function Skills() {
  const skills = [
    "Python", "Java", "JavaScript",
    "Django", "Flask", "FastAPI",
    "LangChain", "LLMs", "NLP",
    "MySQL", "AWS", "Docker"
  ];

  return (
    <section id="skills">
      <h2 className="gradient-text">Tech Stack</h2>

      <div className="grid">
        {skills.map((skill, index) => (
          <div key={index} className="card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;