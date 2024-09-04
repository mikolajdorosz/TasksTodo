import PropTypes from "prop-types";

function TogglerItem({ id, text, checked, onChange }) {
    return (
        <>
            <input
                type="radio"
                className="btn-check"
                id={id}
                name="toggler"
                value={id}
                checked={checked}
                onChange={onChange}
            />
            <label
                className="btn fw-bold fs-3 text-white border-2 rounded-pill"
                htmlFor={id}>
                {text}
            </label>
        </>
    );
}
TogglerItem.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};

export default TogglerItem;
