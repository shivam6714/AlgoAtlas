import PropTypes from "prop-types";
import { ArrowLeft, Bookmark, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const TopicHeader = ({
  title,
  difficulty,
  estimatedTime,
  onBack,
  onBookmark,
}) => {
  return (
    <motion.header
      className="topic-header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="topic-header__left">
        <Button
          variant="ghost"
          onClick={onBack}
          icon={<ArrowLeft size={18} />}
        >
          Back
        </Button>

        <div className="topic-header__info">
          <h1>{title}</h1>

          <div className="topic-header__meta">
            <Badge>{difficulty}</Badge>

            <span className="topic-header__time">
              <Clock size={16} />
              {estimatedTime}
            </span>
          </div>
        </div>
      </div>

      <Button
        variant="secondary"
        icon={<Bookmark size={18} />}
        onClick={onBookmark}
      >
        Bookmark
      </Button>
    </motion.header>
  );
};

TopicHeader.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  estimatedTime: PropTypes.string.isRequired,
  onBack: PropTypes.func,
  onBookmark: PropTypes.func,
};

TopicHeader.defaultProps = {
  onBack: () => {},
  onBookmark: () => {},
};

export default TopicHeader;