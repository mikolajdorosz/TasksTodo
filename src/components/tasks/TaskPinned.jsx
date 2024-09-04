import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { diffBetweenDates } from "../../utils/date";
import usePriorityLabels from "../../hooks/usePriorityLables";
// Components
import Badge from "../common/Badge";
import Button from "../common/Button";
// Reducer
import { TODO_ACTION_TYPES } from "../../reducers/ActionTypes";
// Context
import TodoContext from "../../context/TodoContext";

function TaskPinned({ task }) {
    const { state, dispatch, showTask, handleDoneBtn } =
        useContext(TodoContext);
    const { t } = useTranslation();
    const priorityLabels = usePriorityLabels();

    // Buttons handlers
    const handleUnpinBtn = () => {
        dispatch({
            type: TODO_ACTION_TYPES.PIN_TODO,
            payload: {
                tasks: state.tasks.map((taskFromState) =>
                    taskFromState.id === task.id
                        ? { ...taskFromState, pinned: !taskFromState.pinned }
                        : taskFromState
                ),
                task: state.task,
            },
        });
    };
    const handleHeaderBtns = (icon) => {
        if (icon === "pin-angle-fill") handleUnpinBtn();
        else showTask(task);
    };

    return (
        <div
            className={`background rounded-4 p-3 ${task.hide && "d-none"}`}
            style={{ backgroundColor: task.color }}>
            <div
                className="card p-2 border-0"
                id={task.id}>
                <div className="card-header bg-white d-flex justify-content-between align-items-center border-0">
                    <Badge text={priorityLabels.get(+task.priority)} />
                    <div className="btn-group">
                        {["pin-angle-fill", "eye"].map((icon, index) => (
                            <Button
                                key={index}
                                className="btn-light px-3"
                                icon={icon}
                                onClick={() => handleHeaderBtns(icon)}
                            />
                        ))}
                    </div>
                </div>
                <div className="card-body">
                    <h4 className="card-title fw-bold">{task.title}</h4>

                    <p className="card-text mt-3">{task.description}</p>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between align-items-center border-0">
                    <small>
                        <i className="bi bi-stopwatch me-1"></i>
                        {diffBetweenDates(
                            task.addingDate.key,
                            task.dueDate.key,
                            t("section2.task.deadline1"),
                            t("section2.task.deadline2"),
                            t("section2.task.deadline3"),
                            t("section2.task.deadline4")
                        )}
                    </small>
                    <Button
                        className={`p-2 px-4 ${
                            task.done ? "btn-secondary" : "btn-primary"
                        }`}
                        icon="check-lg"
                        text={t("section2.task.done")}
                        onClick={() => {
                            handleDoneBtn(
                                state.tasks.map((taskFromState) =>
                                    taskFromState.id === task.id
                                        ? {
                                              ...taskFromState,
                                              done: true,
                                              pinned: false,
                                              dueDate: taskFromState.addingDate,
                                          }
                                        : taskFromState
                                )
                            );
                        }}
                        disabled={task.done}
                    />
                </div>
            </div>
        </div>
    );
}

export default TaskPinned;
