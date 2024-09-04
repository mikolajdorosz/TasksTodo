import { useTranslation } from "react-i18next";
import { useContext } from "react";
// Components
import TogglerItem from "./TogglerItem";
// Reducer
import { TODO_ACTION_TYPES } from "../../reducers/ActionTypes";
// Context
import TodoContext from "../../context/TodoContext";

function TaskListToggler() {
    const { state, dispatch } = useContext(TodoContext);
    const { t } = useTranslation();

    const handleToggler = (e) => {
        dispatch({
            type: TODO_ACTION_TYPES.SET_TOGGLER,
            payload: e.target.value,
        });
    };
    return (
        <div className="btn-group gap-2 pt-5 w-100">
            {[
                { key: "pinned", value: t("section2.toggler.pinned") },
                { key: "todo", value: t("section2.toggler.todo") },
                { key: "done", value: t("section2.toggler.done") },
            ].map(({ key, value }) => (
                <TogglerItem
                    key={key}
                    text={value}
                    id={key}
                    onChange={handleToggler}
                    checked={state.toggler === key}
                />
            ))}
        </div>
    );
}

export default TaskListToggler;
