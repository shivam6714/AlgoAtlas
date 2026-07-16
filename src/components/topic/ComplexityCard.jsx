import Card from "../ui/Card";

const ComplexityCard = ({
  best = "O(n)",
  average = "O(n²)",
  worst = "O(n²)",
  space = "O(1)",
}) => {
  const rows = [
    { label: "Best", value: best },
    { label: "Average", value: average },
    { label: "Worst", value: worst },
    { label: "Space", value: space },
  ];

  return (
    <Card className="complexity-card">
      <h3>Complexity Analysis</h3>

      <div className="complexity-table">
        {rows.map((row) => (
          <div key={row.label} className="complexity-row">
            <span>{row.label}</span>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ComplexityCard;