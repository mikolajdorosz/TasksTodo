import PropTypes from "prop-types";

function Button({
    type = "button",
    className,
    id,
    text,
    icon,
    disabled,
    onClick,
}) {
    return (
        <button
            type={type}
            className={`btn fw-bold ${className}`}
            id={id}
            disabled={disabled}
            onClick={onClick}>
            <i className={`bi bi-${icon}`}></i>
            {text}
        </button>
    );
}
Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
