import PracticeCard from "./PracticeCard";

const problems = [
  {
    title: "Bubble Sort",
    difficulty: "Easy",
  },
  {
    title: "Sort an Array",
    difficulty: "Medium",
  },
  {
    title: "Relative Sort Array",
    difficulty: "Easy",
  },
];

const PracticeList = () => {
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