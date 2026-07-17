import "./IconButton.css";

const IconButton = ({
  icon,
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className="icon-button"
      onClick={onClick}
    >
      {icon}

      {children && (
        <span>{children}</span>
      )}
    </button>
  );
};

export default IconButton;