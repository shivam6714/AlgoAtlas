import PracticeCard from "./PracticeCard";

const PracticeList = ({ problems }) => {
  return (
    <div className="practice-list">
      {problems.map((problem) => (
        <PracticeCard
          key={problem.title}
          title={problem.title}
          difficulty={problem.difficulty}
        />
      ))}
    </div>
  );
};

export default PracticeList;