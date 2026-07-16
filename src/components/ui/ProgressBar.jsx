import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress">

      <div
        className="progress-fill"
        style={{
          width: `${progress}%`,
        }}
      ></div>

    </div>
  );
};

export default ProgressBar;