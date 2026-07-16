import "./TopicCard.css";
import { useNavigate } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const navigate = useNavigate();

  return (
    <div className="topic-card">
      <div className="topic-left">
        <div
          className={`status ${
            topic.completed ? "completed" : "pending"
          }`}
        >
          {topic.completed ? "✓" : "○"}
        </div>

        <div>
          <h3>{topic.title}</h3>
          <p>{topic.difficulty}</p>
        </div>
      </div>

      <button
        onClick={() => navigate(`/topic/${topic.slug}`)}
      >
        Start
      </button>
    </div>
  );
};

export default TopicCard;