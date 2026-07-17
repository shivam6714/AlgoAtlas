import Card from "../ui/Card";

const ComplexityCard = () => {
  const timeComplexity = [
    { label: "Best", value: "O(n)" },
    { label: "Average", value: "O(n²)" },
    { label: "Worst", value: "O(n²)" },
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
          <code>O(1)</code>
        </div>
      </div>
    </Card>
  );
};

export default ComplexityCard;