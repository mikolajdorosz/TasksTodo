import i18next from "i18next";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import headerVariants from "../../variants/headerVariants";
// Components
import Button from "../common/Button";

function Header() {
    const location = useLocation();

    const handleChangeLanguage = () => {
        i18next.changeLanguage(i18next.language === "pl" ? "en" : "pl");
    };
    return (
        <motion.header
            variants={headerVariants}
            initial="init"
            animate="show"
            className="container-fluid py-1 px-2 py-lg-3 px-lg-4 d-flex justify-content-between align-items-center position-sticky top-0 z-2">
            <h5 className="fw-bold m-0">
                <i className="bi bi-check-all me-2"></i>
                TasksTodo
            </h5>
            <Button
                className={`${location.pathname === "/tasks" && "text-white"}`}
                icon="globe2"
                onClick={handleChangeLanguage}
            />
        </motion.header>
    );
}

export default Header;
