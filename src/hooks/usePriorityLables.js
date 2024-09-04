import { useState, useEffect } from "react";
import i18next from "i18next";

const usePriorityLabels = () => {
    const generateLabels = () => {
        const labels = new Map();
        labels.set(1, i18next.t(i18next.language === "en" ? "High" : "Wysoki"));
        labels.set(
            2,
            i18next.t(i18next.language === "en" ? "Medium" : "Średni")
        );
        labels.set(3, i18next.t(i18next.language === "en" ? "Low" : "Niski"));
        return labels;
    };

    const [priorityLabels, setPriorityLabels] = useState(generateLabels);

    useEffect(() => {
        const handleLanguageChange = () => {
            setPriorityLabels(generateLabels());
        };
        i18next.on("languageChanged", handleLanguageChange);

        return () => {
            i18next.off("languageChanged", handleLanguageChange);
        };
    }, []);

    return priorityLabels;
};
export default usePriorityLabels;
