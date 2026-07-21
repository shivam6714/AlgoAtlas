import Card from "../ui/Card";

const ComplexityCard = ({ complexity }) => {
  const timeComplexity = [
    { label: "Best", value: complexity.best },
    { label: "Average", value: complexity.average },
    { label: "Worst", value: complexity.worst },
  ];

  return (
    <Card className="complexity-card">
      <h3>Complexity Analysis</h3>

      <div className="complexity-section">
        <h4>Time Complexity</h4>

        {timeComplexity.map((item) => (
          <div
            key={item.label}
            className="complexity-row"
          >
            <span>{item.label}</span>
            <code>{item.value}</code>
          </div>
        ))}
      </div>

      <div className="complexity-divider" />

      <div className="complexity-section">
        <h4>Space Complexity</h4>

        <div className="complexity-row">
          <span>Auxiliary Space</span>
          <code>{complexity.space}</code>
        </div>
      </div>
    </Card>
  );
};

export default ComplexityCard;