import "./SectionTitle.css";

const SectionTitle = ({
  title,
  subtitle,
}) => {
  return (
    <div className="section-title">

      <h1>{title}</h1>

      <p>{subtitle}</p>

    </div>
  );
};

export default SectionTitle;