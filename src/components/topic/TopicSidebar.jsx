import useScrollSpy from "../../hooks/useScrollSpy";

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
  const activeSection = useScrollSpy(
    sections.map((section) => section.id)
  );

  return (
    <aside className="topic-sidebar">
      <h3 className="topic-sidebar__title">Contents</h3>

      <nav>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`topic-sidebar__link ${
              activeSection === section.id ? "active" : ""
            }`}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default TopicSidebar;