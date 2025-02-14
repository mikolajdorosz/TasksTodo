import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import sectionsVariants from "../variants/sectionsVariants";
// Components
import Navigation from "../components/layout/Navigation";
import Header from "../components/layout/Header";
import AddTaskForm from "../components/forms/AddTaskForm";

function AddTask() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <motion.div
                variants={sectionsVariants}
                initial="init"
                animate="show"
                id="section1">
                <div className="container pt-5 mb-5">
                    <h1 className="w-100 fs-3 fs-lg-1 fw-bold text-center">
                        {t("section1.message")}
                    </h1>
                    <AddTaskForm />
                </div>
            </motion.div>
            <Navigation />
        </>
    );
}

export default AddTask;
