import { useNavigate, useParams } from "react-router-dom";

import TopicHero from "../../components/topic/TopicHero";
import TopicLayout from "../../components/topic/TopicLayout";
import { getTopicBySlug } from "../../data/topics";

import "../../styles/topic.css";

const Topic = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const topic = getTopicBySlug(slug);

  return (
    <div className="topic-page">
      <TopicHero
        {...topic}
        onBack={() => navigate(-1)}
        onBookmark={() => console.log("Bookmark")}
      />

      <TopicLayout topic={topic} />
    </div>
  );
};

export default Topic;