import "./Dashboard.css";

const ProgressCard = () => {
    return (
        <div className="progress-card">

            <h3>Overall Progress</h3>

            <div className="progress-bar">

                <div className="progress-fill"></div>

            </div>

            <h2>0%</h2>

            <p>0 of 150 Topics Completed</p>

        </div>
    );
};

export default ProgressCard;