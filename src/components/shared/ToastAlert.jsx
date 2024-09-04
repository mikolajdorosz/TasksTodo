import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { motion } from "framer-motion";
// Components
import Button from "../common/Button";
// Context
import ToastContext from "../../context/ToastContext";

function ToastAlert() {
    const { toastVisible, toastType, hideToast, toastTheme } =
        useContext(ToastContext);
    const { t } = useTranslation();

    return (
        <motion.div
            variants={toastVariants}
            initial="init"
            animate={toastVisible ? "show" : "customExit"}
            className={`toast-container w-100 vh-100 p-3 position-fixed start-0 bottom-0 ${
                toastTheme === "black" ? "bg-black" : "bg-white"
            } rounded-bottom-0`}>
            <div
                id="liveToast"
                className="toast w-100 border-0 bg-transparent shadow-none">
                <div
                    className={`toast-body w-100 px-1 px-lg-4 ${
                        toastTheme === "black" ? "text-white" : "text-black"
                    } fs-6 fs-lg-3 d-flex align-items-center`}>
                    <i
                        className={`bi bi-info-circle ${
                            toastTheme === "black" ? "text-black" : "text-white"
                        }`}></i>
                    <span className="mx-auto">{`${t("toast.message")} ${
                        toastType === "added"
                            ? t("toast.added")
                            : toastType === "edited"
                            ? t("toast.edited")
                            : t("toast.removed")
                    }.`}</span>
                    <Button
                        className={`${
                            toastTheme === "black" ? "text-white" : "text-black"
                        } fs-3`}
                        icon="x-lg"
                        onClick={(e) => hideToast(e)}></Button>
                </div>
            </div>
        </motion.div>
    );
}
export default ToastAlert;

const toastVariants = {
    init: {
        y: "100vh",
        borderRadius: "4rem",
    },
    show: {
        y: "90vh",
    },
    customExit: {
        y: "100vh",
    },
};
