import { useNavigate } from "react-router-dom";

import TopicHero from "../../components/topic/TopicHero";
import TopicLayout from "../../components/topic/TopicLayout";

import "../../styles/topic.css";

const Topic = () => {
  const navigate = useNavigate();

  const topic = {
    title: "Bubble Sort",
    difficulty: "Easy",
    estimatedTime: "15 min",
    category: "Sorting",
    description:
      "Learn one of the simplest comparison-based sorting algorithms and understand how it works step by step.",
  };

  return (
    <div className="topic-page">
      <TopicHero
        {...topic}
        onBack={() => navigate(-1)}
        onBookmark={() => console.log("Bookmark")}
      />

      <TopicLayout />
    </div>
  );
};

export default Topic;