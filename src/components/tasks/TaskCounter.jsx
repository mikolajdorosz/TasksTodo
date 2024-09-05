import { useTranslation } from "react-i18next";

function TaskCounter({ length }) {
    const { t } = useTranslation();
    return (
        <div className="my-2 my-lg-3 w-100 d-flex justify-content-end fw-bold">
            {`${t("section2.taskCounter")} ${length}`}
        </div>
    );
}

export default TaskCounter;
