import { useTranslation } from "react-i18next";
import { createContext, useReducer } from "react";
import { Modal } from "bootstrap";
// Reducer
import TodoReducer from "../reducers/todo/TodoReducer";
import { INITIAL_STATE } from "../reducers/todo/TodoState";
import { TODO_ACTION_TYPES } from "../reducers/ActionTypes";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE);
    const { t } = useTranslation();

    const showTask = (task) => {
        dispatch({
            type: TODO_ACTION_TYPES.SHOW_TASK,
            payload: task,
        });
        new Modal(document.getElementById("task-modal")).show();
    };
    const hideTask = () => {
        Modal.getInstance(document.getElementById("task-modal")).hide();
    };
    const handleDoneBtn = (payload) => {
        if (window.confirm(t("alert.setDone")))
            dispatch({ type: TODO_ACTION_TYPES.SET_TODO_DONE, payload });
    };

    return (
        <TodoContext.Provider
            value={{
                state,
                dispatch,

                showTask,
                hideTask,
                handleDoneBtn,
            }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
