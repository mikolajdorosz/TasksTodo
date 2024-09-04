import { useTranslation } from "react-i18next";
import Proptypes from "prop-types";

function FormInput({
    type = "text",
    lClassName,
    iClassName,
    id,
    text,
    value,
    min,
    placeholder,
    onChange,
    required = false,
}) {
    const { t } = useTranslation();
    return (
        <>
            <label
                className={`form-label fw-bold ${lClassName}`}
                htmlFor={id}>
                {text}
            </label>
            <input
                type={type}
                className={`form-control p-3 ${iClassName}`}
                id={id}
                value={value}
                min={min}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
            />
            {value === "" && (
                <div className="invalid-feedback mt-2">{`${t(
                    "section1.validationAlert"
                )} ${text.toLowerCase()}.`}</div>
            )}
        </>
    );
}
FormInput.propTypes = {
    type: Proptypes.string,
    lClassName: Proptypes.string,
    iClassName: Proptypes.string,
    id: Proptypes.string,
    text: Proptypes.string,
    value: Proptypes.string,
    min: Proptypes.string,
    placeholder: Proptypes.string,
    onChange: Proptypes.func,
    required: Proptypes.bool,
};

export default FormInput;
