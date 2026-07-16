import "./Badge.css";

const Badge = ({ text, color }) => {
  return (
    <span
      className="badge"
      style={{ background: color }}
    >
      {text}
    </span>
  );
};

export default Badge;