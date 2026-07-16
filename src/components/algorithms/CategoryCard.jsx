import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const Icon = category.icon;

  return (
    <div
      className="category-card"
      onClick={() => navigate(`/category/${category.slug}`)}
    >
      <div
        className="category-icon"
        style={{ background: category.color }}
      >
        <Icon size={28} color="white" />
      </div>

      <h3>{category.name}</h3>

      <p>{category.topics} Topics</p>

      <div className="category-progress">
        <div
          className="category-progress-fill"
          style={{ width: `${category.progress}%` }}
        ></div>
      </div>

      <span>{category.progress}% Completed</span>
    </div>
  );
};

export default CategoryCard;