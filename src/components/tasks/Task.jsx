import { useTranslation } from "react-i18next";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { diffBetweenDates, formatDate } from "../../utils/date";
// Components
import Button from "../common/Button";
import Badge from "../common/Badge";
// Reducer
import { TODO_ACTION_TYPES } from "../../reducers/ActionTypes";
// Context
import TodoContext from "../../context/TodoContext";
import ToastContext from "../../context/ToastContext";
// Hooks
import usePriorityLabels from "../../hooks/usePriorityLables";

function Task() {
    const { showToast } = useContext(ToastContext);
    const { state, dispatch, handleDoneBtn, hideTask, toggler } =
        useContext(TodoContext);
    const [expanded, setExpanded] = useState(false);
    const [pinIcon, setPinIcon] = useState("pin");
    const navigate = useNavigate();
    const { t } = useTranslation();
    const priorityLabels = usePriorityLabels();

    // Icons
    const baseIcons = [
        "trash",
        expanded ? "arrows-angle-contract" : "arrows-angle-expand",
        "eye-slash",
    ];
    const icons = state.task.done
        ? baseIcons
        : [pinIcon, "pencil", ...baseIcons];
    useEffect(
        () => setPinIcon(state.task.pinned ? "pin-angle-fill" : "pin"),
        [state.task.pinned]
    );

    // Buttons handlers
    const handlePinBtn = () => {
        dispatch({
            type: TODO_ACTION_TYPES.PIN_TODO,
            payload: {
                tasks: state.tasks.map((task) =>
                    task.id === state.task.id
                        ? { ...task, pinned: !task.pinned }
                        : task
                ),
                task: { ...state.task, pinned: !state.task.pinned },
            },
        });
        if (toggler === "pinned") hideTask();
    };
    const handleEditBtn = () => {
        hideTask();
        dispatch({ type: TODO_ACTION_TYPES.SET_TO_EDIT });
        setTimeout(() => navigate("/"), 250);
    };
    const handleDeleteBtn = () => {
        if (window.confirm(t("alert.removeTask"))) {
            dispatch({
                type: TODO_ACTION_TYPES.DELETE_TODO,
            });
            hideTask();
            showToast("deleted", "white");
        }
    };
    const handleHeaderBtns = (icon) => {
        if (icon === "pin" || icon === "pin-angle-fill") handlePinBtn();
        else if (icon === "pencil") handleEditBtn();
        else if (icon === "trash") handleDeleteBtn();
        else if (icon === "eye-slash") hideTask();
        else setExpanded(!expanded);
    };

    return (
        <div
            className="modal fade"
            id="task-modal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            style={{ backdropFilter: "blur(2px)" }}>
            <div
                className={`modal-dialog ${
                    expanded ? "modal-fullscreen" : "modal-dialog-centered"
                }`}>
                <div
                    className={`modal-content text-black ${
                        expanded ? "p-lg-5" : "p-lg-3"
                    }`}>
                    <div className="modal-header d-flex justify-content-between align-items-center">
                        <Badge
                            text={priorityLabels.get(+state.task.priority)}
                        />
                        <div className="btn-group">
                            {icons.map((icon) => (
                                <Button
                                    key={icon}
                                    className="btn-light px-lg-3"
                                    icon={icon}
                                    onClick={() => handleHeaderBtns(icon)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="modal-body">
                        <h4 className="modal-title fw-bold">
                            {state.task.title}
                        </h4>
                        <ul className="list-group list-group-flush mt-4">
                            {[
                                {
                                    ...state.task.addingDate,
                                    name: t("section2.task.addingDate"),
                                },
                                {
                                    ...state.task.dueDate,
                                    name: t("section2.task.dueDate"),
                                },
                            ].map(({ value, name }, index) => (
                                <li
                                    key={index}
                                    className="list-group-item">
                                    <small className="d-flex justify-content-between align-items-end">
                                        {name}
                                        <span className="fw-bold text-center">
                                            {formatDate(value)}
                                        </span>
                                    </small>
                                </li>
                            ))}
                            <li className="list-group-item pt-3">
                                <p>{state.task.description}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-footer d-flex justify-content-between flex-nowrap">
                        <small>
                            <i className="bi bi-stopwatch me-1"></i>
                            {diffBetweenDates(
                                state.task.addingDate?.key,
                                state.task.dueDate?.key,
                                t("section2.task.deadline1"),
                                t("section2.task.deadline2"),
                                t("section2.task.deadline3"),
                                t("section2.task.deadline4")
                            )}
                        </small>
                        <Button
                            className={`btn-primary text-nowrap${
                                expanded ? "p-3 px-lg-5" : "p-2 px-lg-4"
                            }`}
                            icon={
                                state.task.done ? "arrow-clockwise" : "check-lg"
                            }
                            text={
                                state.task.done
                                    ? t("section2.task.refresh")
                                    : t("section2.task.done")
                            }
                            onClick={() => {
                                hideTask();
                                if (state.task.done)
                                    setTimeout(() => handleEditBtn(), 250);
                                else {
                                    handleDoneBtn(
                                        state.tasks.map((task) =>
                                            task.id === state.task.id
                                                ? {
                                                      ...task,
                                                      done: true,
                                                      pinned: false,
                                                      dueDate: task.addingDate,
                                                  }
                                                : task
                                        )
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;
