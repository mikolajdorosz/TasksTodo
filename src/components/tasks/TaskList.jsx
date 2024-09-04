import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
// Components
import FilterTasksForm from "../forms/FilterTasksForm";
import TaskShort from "./TaskShort";
import TaskPinned from "./TaskPinned";
import Task from "./Task";
import TaskCounter from "./TaskCounter";
// Context
import TodoContext from "../../context/TodoContext";

function TaskList() {
    const { state } = useContext(TodoContext);
    const [tasks, setTasks] = useState(state.tasks);
    const { t } = useTranslation();

    useEffect(() => {
        setTasks(filtered(toggled()).sort(sorted));
    }, [state.toggler, state.tasks, state.filter, state.sortBy]);

    // Tasks handlers
    const toggled = () => {
        switch (state.toggler) {
            case "pinned":
                return state.tasks?.filter((task) => task.pinned);
            case "done":
                return state.tasks?.filter((task) => task.done);
            default:
                return state.tasks?.filter((task) => !task.done);
        }
    };
    const filtered = (tasks) => {
        return tasks?.filter((task) =>
            task.title.toLowerCase().includes(state.filter)
        );
    };
    const sorted = (task1, task2) => {
        switch (state.sortBy) {
            case "priority-high":
                return task1.priority - task2.priority;
            case "priority-low":
                return task2.priority - task1.priority;
            case "dueDate-early":
                return task1.dueDate.key - task2.dueDate.key;
            case "dueDate-late":
                return task2.dueDate.key - task1.dueDate.key;
            default:
                return task2.addingDate.key - task1.addingDate.key;
        }
    };

    return (
        <>
            <Task />
            {state.toggler !== "pinned" &&
                ((state.filter === 0 && tasks.length > 0) ||
                    (state.filter.length > 0 && tasks.length === 0) ||
                    tasks.length > 0) && <FilterTasksForm />}
            {tasks.length > 0 && <TaskCounter length={tasks.length} />}
            {tasks.length === 0 && state.filter.length === 0 ? (
                <p className="mt-5 py-5 text-center">
                    {t("section2.taskList.noTasks")}
                </p>
            ) : tasks.length === 0 ? (
                <p className="mt-5 py-5 text-center">
                    {t("section2.taskList.notFound")}
                </p>
            ) : null}
            <div className="row g-2">
                {Array.from(tasks).map((task, index) => (
                    <div
                        key={index}
                        className={
                            state.toggler === "pinned"
                                ? "col-12 col-lg-4"
                                : "col-12 col-lg-6"
                        }>
                        {state.toggler === "pinned" ? (
                            <TaskPinned task={task} />
                        ) : (
                            <TaskShort task={task} />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default TaskList;
