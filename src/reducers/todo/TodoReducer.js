import { v4 as uuidv4 } from "uuid";
import { TODO_ACTION_TYPES } from "../ActionTypes";
import { toLocaleISOString } from "../../utils/date";
import { INITIAL_STATE } from "./TodoState";
import { updateLocalStorage } from "../../utils/localStorage";

function TodoReducer(state, action) {
    switch (action.type) {
        case TODO_ACTION_TYPES.HANDLE_ADD_FORM_INPUT:
            return {
                ...state,
                task: {
                    ...state.task,
                    [action.payload.id]:
                        action.payload.id === "dueDate"
                            ? {
                                  key: new Date(action.payload.value).valueOf(),
                                  value: action.payload.value,
                              }
                            : action.payload.value,
                },
            };
        case TODO_ACTION_TYPES.ADD_TODO:
            const newTask = {
                ...state.task,
                id: uuidv4(),
                addingDate: {
                    key: new Date().getTime(),
                    value: toLocaleISOString(
                        new Date().toISOString().slice(0, 16)
                    ),
                },
                timeLeft: Math.max(
                    state.task.dueDate.key - new Date().getTime(),
                    0
                ),
            };
            updateLocalStorage([newTask, ...state.tasks]);
            return {
                ...state,
                tasks: [newTask, ...state.tasks],
            };
        case TODO_ACTION_TYPES.SET_TO_EDIT:
            return {
                ...state,
                task: {
                    ...state.task,
                    done: false,
                },
                editMode: true,
            };
        case TODO_ACTION_TYPES.EDIT_TODO: {
            const updatedTasks = state.tasks.map((task) =>
                task.id === state.task.id ? state.task : task
            );
            updateLocalStorage(updatedTasks);
            return {
                ...state,
                tasks: updatedTasks,
            };
        }
        case TODO_ACTION_TYPES.PIN_TODO:
            updateLocalStorage(action.payload.tasks);
            return {
                ...state,
                tasks: action.payload.tasks,
                task: action.payload.task,
            };
        case TODO_ACTION_TYPES.DELETE_TODO: {
            const updatedTasks = state.tasks.filter(
                (task) => task.id !== state.task.id
            );
            updateLocalStorage(updatedTasks);
            return {
                ...state,
                tasks: updatedTasks,
            };
        }
        case TODO_ACTION_TYPES.SET_TODO_DONE:
            updateLocalStorage(action.payload);
            return {
                ...state,
                tasks: action.payload,
            };
        case TODO_ACTION_TYPES.SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        case TODO_ACTION_TYPES.SET_SORTBY:
            return {
                ...state,
                sortBy: action.payload,
            };
        case TODO_ACTION_TYPES.CLEAR_ADD_FORM:
            return {
                ...state,
                task: INITIAL_STATE.task,
                editMode: INITIAL_STATE.editMode,
            };
        case TODO_ACTION_TYPES.CLEAR_FILTER_FORM:
            return {
                ...state,
                filter: "",
                sortBy: "",
            };
        case TODO_ACTION_TYPES.SHOW_TASK:
            return { ...state, task: action.payload };
        case TODO_ACTION_TYPES.SET_TOGGLER:
            return {
                ...state,
                toggler: action.payload,
            };
        default:
            return state;
    }
}

export default TodoReducer;
