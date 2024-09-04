import PropTypes from "prop-types";

function Badge({ className = "bg-primary", text }) {
    return <span className={`badge p-2 px-3 ${className}`}>{text}</span>;
}
Badge.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
};

export default Badge;
