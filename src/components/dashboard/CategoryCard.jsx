import "./Dashboard.css";

const CategoryCard = ({ title, completed, total }) => {
    return (
        <div className="category-card">

            <h3>{title}</h3>

            <p>
                {completed} / {total}
            </p>

        </div>
    );
};

export default CategoryCard;