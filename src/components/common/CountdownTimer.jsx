import { useState, useEffect, useRef } from "react";
import { diffBetweenDates } from "../../utils/date";
import { useTranslation } from "react-i18next";

const CountdownTimer = ({ task }) => {
    const [timestamp, setTimestamp] = useState("");
    const { t } = useTranslation();
    const intervalRef = useRef(null);

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = diffBetweenDates(
            task.timeLeft,
            t("section2.task.deadline1"),
            t("section2.task.deadline2"),
            t("section2.task.deadline3"),
            t("section2.task.deadline4"),
            (prev) => setTimestamp(prev),
            task.done
        );

        return () => clearInterval(intervalRef.current);
    }, []);

    return <span>{timestamp}</span>;
};

export default CountdownTimer;
