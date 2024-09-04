import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toLocaleISOString } from "../../utils/date";
// Components
import FormInput from "../common/FormInput";
import FormSelect from "../common/FormSelect";
import Button from "../common/Button";
// Reducer
import { TODO_ACTION_TYPES } from "../../reducers/ActionTypes";
// Context
import TodoContext from "../../context/TodoContext";
import ToastContext from "../../context/ToastContext";

function AddTaskForm() {
    const { state, dispatch } = useContext(TodoContext);
    const { showToast } = useContext(ToastContext);
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [minDate, setMinDate] = useState(
        toLocaleISOString(new Date().toISOString().slice(0, 16))
    );
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.currentTarget.checkValidity()) {
            if (state.editMode) {
                editTodo();
                navigate("/tasks");
                setTimeout(() => showToast("edited", "white"), 600);
            } else {
                addTodo();
                showToast("added");
            }
            clearForm();
        } else setValidated(true);
    };

    // Form actions
    const editTodo = () => dispatch({ type: TODO_ACTION_TYPES.EDIT_TODO });
    const addTodo = () => dispatch({ type: TODO_ACTION_TYPES.ADD_TODO });
    const clearForm = () => {
        dispatch({ type: TODO_ACTION_TYPES.CLEAR_ADD_FORM });
        setValidated(false);
        setMinDate(toLocaleISOString(new Date().toISOString().slice(0, 16)));
    };
    const handleFormInput = (e) =>
        dispatch({
            type: TODO_ACTION_TYPES.HANDLE_ADD_FORM_INPUT,
            payload: { id: e.target.id, value: e.target.value },
        });
    const cancelEditing = () => {
        navigate("/tasks");
        setTimeout(
            () =>
                dispatch({
                    type: TODO_ACTION_TYPES.CLEAR_ADD_FORM,
                }),
            500
        );
    };
    return (
        <form
            className={`pt-2 pt-lg-4 ${validated ? "was-validated" : ""}`}
            onSubmit={handleSubmit}
            noValidate>
            <FormInput
                id="title"
                text={t("section1.form.title")}
                value={state.task.title}
                placeholder={t("section1.form.titlePlaceholder")}
                onChange={handleFormInput}
                required={true}
            />
            <FormInput
                type="datetime-local"
                lClassName="mt-3"
                id="dueDate"
                text={t("section1.form.dueDate")}
                value={state.task.dueDate?.value}
                min={minDate}
                onChange={handleFormInput}
                required={true}
            />
            <FormSelect
                lClassName="mt-3"
                id="priority"
                text={t("section1.form.priority")}
                value={+state.task.priority}
                onChange={handleFormInput}
                required={true}>
                <option
                    value=""
                    className="d-none">
                    {t("section1.form.priorityChoose")}
                </option>
                <option value="1">{t("section1.form.priorityHigh")}</option>
                <option value="2">{t("section1.form.priorityMedium")}</option>
                <option value="3">{t("section1.form.priorityLow")}</option>
            </FormSelect>
            <label
                htmlFor="color"
                className="form-label fw-bold mt-3">
                {t("section1.form.color")}
            </label>
            <div id="color-container">
                <input
                    type="color"
                    id="color"
                    value={state.task.color}
                    onChange={handleFormInput}
                />
            </div>
            <label
                htmlFor="description"
                className="form-label fw-bold mt-3">
                {t("section1.form.description")}
            </label>
            <textarea
                className="form-control"
                id="description"
                value={state.task.description}
                rows={6}
                placeholder={t("section1.form.descriptionPlaceholder")}
                onChange={handleFormInput}
            />
            <div className="d-flex justify-content-center">
                <Button
                    type="submit"
                    className="mt-4 btn-primary p-3 px-5 rounded-pill"
                    id="submit"
                    icon={state.editMode ? "pencil" : "plus-lg"}
                    text={
                        state.editMode
                            ? t("section1.submitBtn.editTask")
                            : t("section1.submitBtn.addTask")
                    }
                />
                {state.editMode && (
                    <Button
                        className="mt-4 ms-5 btn-danger p-3 px-5 rounded-pill"
                        id="submit"
                        icon="x-lg"
                        text={t("section1.submitBtn.cancelEdit")}
                        onClick={cancelEditing}
                    />
                )}
            </div>
        </form>
    );
}

export default AddTaskForm;
