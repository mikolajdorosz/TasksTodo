import { randomHex } from "../../utils/color";
import { loadTasksFromLocalStorage } from "../../utils/localStorage";
// Data
import TasksData from "../../data/TasksData";

export const INITIAL_STATE = {
    tasks: loadTasksFromLocalStorage(),
    task: {
        id: "",
        title: "",
        dueDate: { key: 0, value: "" },
        addingDate: { key: 0, value: "" },
        priority: "",
        color: randomHex(),
        description: "",
        pinned: false,
        done: false,
    },
    filter: "",
    sortBy: "",
    editMode: false,
    toggler: "pinned",
};
