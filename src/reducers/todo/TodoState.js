import { randomHex } from "../../utils/color";
// Data
import TasksData from "../../data/TasksData";

export const INITIAL_STATE = {
    tasks: TasksData,
    task: {
        id: "",
        title: "",
        dueDate: { key: 0, value: "" },
        addingDate: { key: 0, value: "" },
        priority: 0,
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
