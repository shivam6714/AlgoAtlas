import TopicSidebar from "./TopicSidebar";
import TopicContent from "./TopicContent";

const TopicLayout = ({ topic }) => {
  return (
    <section className="topic-layout">
      <TopicSidebar />
      <TopicContent topic={topic} />
    </section>
  );
};

export default TopicLayout;