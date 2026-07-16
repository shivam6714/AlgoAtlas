const sections = [
  { id: "theory", label: "Theory" },
  { id: "visualization", label: "Visualization" },
  { id: "dry-run", label: "Dry Run" },
  { id: "complexity", label: "Complexity" },
  { id: "code", label: "Code" },
  { id: "applications", label: "Applications" },
  { id: "practice", label: "Practice Problems" },
  { id: "notes", label: "Notes" },
];

const TopicSidebar = () => {
  return (
    <aside className="topic-sidebar">
      <nav>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="topic-sidebar__link"
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default TopicSidebar;