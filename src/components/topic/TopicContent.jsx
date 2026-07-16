import TopicSection from "./TopicSection";

const TopicContent = () => {
  return (
    <main className="topic-content">
      <TopicSection id="theory" title="Theory">
        <p>
          Bubble Sort repeatedly compares adjacent elements and swaps them
          if they are in the wrong order.
        </p>
      </TopicSection>

      <TopicSection id="visualization" title="Visualization">
        <p>Visualization will be added in Phase 5.</p>
      </TopicSection>

      <TopicSection id="dry-run" title="Dry Run">
        <p>Interactive dry run coming soon.</p>
      </TopicSection>

      <TopicSection id="complexity" title="Complexity">
        <p>Complexity card placeholder.</p>
      </TopicSection>

      <TopicSection id="code" title="Code">
        <p>Code preview placeholder.</p>
      </TopicSection>

      <TopicSection id="applications" title="Applications">
        <p>Real-world applications will appear here.</p>
      </TopicSection>

      <TopicSection id="practice" title="Practice Problems">
        <p>Practice questions will be listed here.</p>
      </TopicSection>

      <TopicSection id="notes" title="Notes">
        <p>Your personal notes will appear here.</p>
      </TopicSection>
    </main>
  );
};

export default TopicContent;