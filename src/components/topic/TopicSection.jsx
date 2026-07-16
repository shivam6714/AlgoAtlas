import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const TopicSection = ({
  id,
  title,
  children,
  className = "",
}) => {
  return (
    <motion.section
      id={id}
      className={`topic-section ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <SectionTitle title={title} />
      <div className="topic-section-content">
        {children}
      </div>
    </motion.section>
  );
};

TopicSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default TopicSection;