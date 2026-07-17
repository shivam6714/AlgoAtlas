import { ArrowLeft, Bookmark, Clock } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const TopicHero = ({
  title,
  difficulty,
  estimatedTime,
  category,
  description,
  onBack = () => {},
  onBookmark = () => {},
}) => {
  return (
    <section className="topic-hero">
      <button className="topic-hero__back" onClick={onBack}>
        <ArrowLeft size={16} />
        <span>Back to {category}</span>
      </button>

      <div className="topic-hero__content">
        <div className="topic-hero__left">
          <h1>{title}</h1>

          <div className="topic-hero__meta">
            <Badge>{difficulty}</Badge>

            <span className="topic-hero__category">
              {category}
            </span>

            <span className="topic-hero__time">
              <Clock size={16} />
              {estimatedTime}
            </span>
          </div>

          <p>{description}</p>
        </div>

        <div className="topic-hero__actions">
          <Button
            variant="secondary"
            icon={<Bookmark size={16} />}
            onClick={onBookmark}
          >
            Bookmark
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopicHero;