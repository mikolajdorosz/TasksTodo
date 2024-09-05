import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import sectionsVariants from "../variants/sectionsVariants";
// Components
import Navigation from "../components/layout/Navigation";
import Header from "../components/layout/Header";
import TaskListToggler from "../components/toggler/TaskListToggler";
import TaskList from "../components/tasks/TaskList";

function BrowseTasks() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <motion.div
                variants={sectionsVariants}
                initial="init"
                animate="show"
                id="section2">
                <div className="container pt-5 mb-5">
                    <h1 className="w-100 fw-bold text-center">
                        {t("section2.message")}
                    </h1>
                    <TaskListToggler />
                    <TaskList />
                </div>
            </motion.div>
            <Navigation />
        </>
    );
}

export default BrowseTasks;
