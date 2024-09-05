import { useTranslation } from "react-i18next";
import { useContext, useState, useEffect } from "react";
import { diffBetweenDates } from "../../utils/date";
import usePriorityLabels from "../../hooks/usePriorityLables";
// Components
import Button from "../common/Button";
import Badge from "../common/Badge";
// Context
import TodoContext from "../../context/TodoContext";

function TaskShort({ task }) {
    const [width, setWidth] = useState(window.innerWidth);
    const { showTask } = useContext(TodoContext);
    const { t } = useTranslation();
    const priorityLabels = usePriorityLabels();

    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className={`background rounded-3 px-3 py-2 ${
                task.hide && "d-none"
            }`}
            style={{ backgroundColor: task.color }}>
            <div
                className="card border-0"
                id={task.id}>
                <div className="card-body px-3 py-2 d-flex justify-content-between align-items-center">
                    <div>
                        <strong className="me-3">{task.title}</strong>
                        <Badge text={priorityLabels.get(+task.priority)} />
                        {width >= 992 && (
                            <Badge
                                className="text-black"
                                text={diffBetweenDates(
                                    task.addingDate.key,
                                    task.dueDate.key,
                                    t("section2.task.deadline1"),
                                    t("section2.task.deadline2"),
                                    t("section2.task.deadline3"),
                                    t("section2.task.deadline4")
                                )}
                            />
                        )}
                    </div>
                    <Button
                        className="btn-primary py-1 px-lg-3"
                        icon="eye"
                        onClick={() => showTask(task)}
                    />
                </div>
            </div>
        </div>
    );
}

export default TaskShort;
