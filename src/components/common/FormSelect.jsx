import { useTranslation } from "react-i18next";
import Proptypes from "prop-types";

function FormSelect({
    children,
    lClassName,
    iClassName,
    id,
    text,
    value = "",
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
            <select
                id={id}
                className={`form-select p-3 ${iClassName}`}
                value={value}
                onChange={onChange}
                required={required}>
                {children}
            </select>
            {value === "" && (
                <div className="invalid-feedback mt-2">{`${t(
                    "section1.validationAlert"
                )} ${text.toLowerCase()}.`}</div>
            )}
        </>
    );
}
FormSelect.propTypes = {
    children: Proptypes.node,
    lClassName: Proptypes.string,
    iClassName: Proptypes.string,
    id: Proptypes.string,
    text: Proptypes.string,
    value: Proptypes.string,
    onChange: Proptypes.func,
    required: Proptypes.bool,
};

export default FormSelect;
