import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const PracticeCard = ({
  title,
  difficulty,
}) => {
  return (
    <Card className="practice-card">
      <div className="practice-card__info">
        <h3>{title}</h3>

        <Badge>{difficulty}</Badge>
      </div>

      <Button variant="primary">
        Solve
      </Button>
    </Card>
  );
};

export default PracticeCard;