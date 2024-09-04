import { createContext, useState } from "react";
import { Toast } from "bootstrap";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastType, setToastType] = useState("added");
    const [toastTheme, setToastTheme] = useState("black");
    const [timeoutState, setTimeoutState] = useState(null);

    const showToast = (type, theme = "black") => {
        if (timeoutState) clearTimeout(timeoutState);
        if (Toast.getInstance(document.getElementById("liveToast")))
            hideToast();

        setToastType(type);
        setToastTheme(theme);
        Toast.getOrCreateInstance(document.getElementById("liveToast")).show();
        setToastVisible(true);
        const newTimeout = setTimeout(() => setToastVisible(false), 5250);
        setTimeoutState(newTimeout);
    };

    const hideToast = () => {
        Toast.getInstance(document.getElementById("liveToast")).dispose();
        setToastVisible(false);
    };

    return (
        <ToastContext.Provider
            value={{
                showToast,
                hideToast,
                toastVisible,
                toastType,
                toastTheme,
            }}>
            {children}
        </ToastContext.Provider>
    );
};

export default ToastContext;
