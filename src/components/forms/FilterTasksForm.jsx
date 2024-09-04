import { useTranslation } from "react-i18next";
import { useContext } from "react";
// Components
import Button from "../common/Button";
import FormInput from "../common/FormInput";
import FormSelect from "../common/FormSelect";
// Reducer
import { TODO_ACTION_TYPES } from "../../reducers/ActionTypes";
// Context
import TodoContext from "../../context/TodoContext";

function FilterTasksForm() {
    const { state, dispatch } = useContext(TodoContext);
    const { t } = useTranslation();

    // Form handlers
    const resetForm = () => {
        dispatch({ type: TODO_ACTION_TYPES.CLEAR_FILTER_FORM });
    };
    const handleFilter = (e) => {
        dispatch({
            type: TODO_ACTION_TYPES.SET_FILTER,
            payload: e.target.value,
        });
    };
    const handleSortBy = (e) => {
        dispatch({
            type: TODO_ACTION_TYPES.SET_SORTBY,
            payload: e.target.value,
        });
    };
    return (
        <form className="mt-3 mt-lg-5">
            <div className="row g-2 g-lg-3">
                <div className="col-lg">
                    <FormInput
                        id="filter"
                        text={t("section2.form.filter")}
                        value={state.filter}
                        placeholder={t("section2.form.filterPlaceholder")}
                        onChange={handleFilter}
                    />
                </div>
                <div className="col col-lg-2">
                    <FormSelect
                        id="sort"
                        text={t("section2.form.sortBy")}
                        value={state.sortBy}
                        onChange={handleSortBy}>
                        <option
                            value=""
                            className="d-none"
                            disabled>
                            {t("section2.form.sortByChoose")}
                        </option>
                        <option value="priority-high">
                            {t("section2.form.sortByPriorityHigh")}
                        </option>
                        <option value="priority-low">
                            {t("section2.form.sortByPriorityLow")}
                        </option>
                        <option value="dueDate-early">
                            {t("section2.form.sortByDueDateEarly")}
                        </option>
                        <option value="dueDate-late">
                            {t("section2.form.sortByDueDateLate")}
                        </option>
                    </FormSelect>
                </div>
                <div className="col-2 col-lg-auto align-content-end">
                    <Button
                        className="btn-primary p-3 w-100 w-lg-auto"
                        icon="arrow-clockwise"
                        onClick={resetForm}
                    />
                </div>
            </div>
        </form>
    );
}

export default FilterTasksForm;
