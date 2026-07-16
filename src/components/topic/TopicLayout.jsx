import TopicSidebar from "./TopicSidebar";
import TopicContent from "./TopicContent";

const TopicLayout = () => {
  return (
    <section className="topic-layout">
      <TopicSidebar />
      <TopicContent />
    </section>
  );
};

export default TopicLayout;