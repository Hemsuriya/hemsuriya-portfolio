import { motion } from "framer-motion";

const notes = [
  {
    title: "Designing Reliable Backend Systems",
    summary:
      "How I structure service boundaries, fallbacks, and data flow to keep backend systems consistent in production.",
  },
  {
    title: "FastAPI Patterns for High-Volume APIs",
    summary:
      "Practical API design patterns I use for request validation, async jobs, and observability in production systems.",
  },
  {
    title: "From Prototype to Production",
    summary:
      "Lessons learned while moving demos into stable, maintainable software that teams can rely on.",
  },
];

function EngineeringNotes() {
  return (
    <motion.section
      id="notes"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="section-heading gradient-text">Engineering Notes</h2>
      <p className="section-subtitle">Technical write-ups that show how I think and ship</p>

      <div className="notes-grid">
        {notes.map((note) => (
          <article key={note.title} className="card note-card">
            <h3>{note.title}</h3>
            <p>{note.summary}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export default EngineeringNotes;
