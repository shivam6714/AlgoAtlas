import "./Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant}`}
    >
      {icon && <span className="btn-icon">{icon}</span>}

      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;