import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import navigationVariants from "../../variants/navigationVariants";
// Reducer
import { TODO_ACTION_TYPES } from "../../reducers/ActionTypes";
// Context
import TodoContext from "../../context/TodoContext";
import ToastContext from "../../context/ToastContext";

function Navigation() {
    const { state, dispatch } = useContext(TodoContext);
    const { toastVisible, hideToast } = useContext(ToastContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = () => {
        if (location.pathname === "/") navigate("/tasks");
        else navigate("/");
        if (toastVisible) hideToast();
        if (!state.editMode)
            dispatch({ type: TODO_ACTION_TYPES.CLEAR_ADD_FORM });
    };
    return (
        <motion.div
            variants={navigationVariants}
            initial="init"
            animate="show"
            whileHover="hover"
            exit="exit"
            className={`${location.pathname === "/" ? "bg-black" : "bg-white"}
             vh-200 w-100 position-fixed z-2 bottom-0 start-0 cursor-pointer shadow-lg`}
            onClick={handleNavigation}></motion.div>
    );
}

export default Navigation;
