import TopicSection from "./TopicSection";
import { getCode, getPractice } from "../../topics";
import ComplexityCard from "./ComplexityCard";
import CodePreview from "./CodePreview";
import PracticeList from "./PracticeList";
import MDXContent from "./MDXContent";
const TopicContent = ({ topic }) => {
    console.log("Current topic:", topic.slug);
    const code = getCode(topic.slug);
    const practice = getPractice(topic.slug);
    return (
        <main className="topic-content">
            <TopicSection id="theory" title="Theory">
                <MDXContent slug={topic.slug} />
            </TopicSection>

            <TopicSection id="visualization" title="Visualization">
                <p>Visualization will be added in Phase 5.</p>
            </TopicSection>

            <TopicSection id="dry-run" title="Dry Run">
                <p>Interactive dry run coming soon.</p>
            </TopicSection>

            <TopicSection id="complexity" title="Complexity">
                <ComplexityCard complexity={topic.complexity} />
            </TopicSection>

            <TopicSection id="code" title="Code">
                {code && <CodePreview code={code} />}
            </TopicSection>

            <TopicSection id="applications" title="Applications">
                <p>Real-world applications will appear here.</p>
            </TopicSection>

            <TopicSection id="practice" title="Practice Problems">
                <PracticeList problems={practice} />
            </TopicSection>

            <TopicSection id="notes" title="Notes">
                <p>Your personal notes will appear here.</p>
            </TopicSection>
        </main>
    );
};

export default TopicContent;