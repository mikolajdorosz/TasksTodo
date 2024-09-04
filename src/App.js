import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// Views
import AddTask from "./views/AddTask";
import BrowseTasks from "./views/BrowseTasks";
// Components
import ToastAlert from "./components/shared/ToastAlert";
import ThemeSwitcher from "./components/shared/ThemeSwitcher";
import ScrollbarHandler from "./components/shared/ScrollbarHandler";
// Context
import { TodoProvider } from "./context/TodoContext";
import { ToastProvider } from "./context/ToastContext";

function App() {
    const location = useLocation();
    return (
        <ToastProvider>
            <TodoProvider>
                <ThemeSwitcher />
                <ScrollbarHandler />
                <main>
                    <AnimatePresence mode="wait">
                        <Routes
                            location={location}
                            key={location.pathname}>
                            <Route
                                path="/"
                                element={<AddTask />}
                            />
                            <Route
                                path="/tasks"
                                element={<BrowseTasks />}
                            />
                        </Routes>
                    </AnimatePresence>
                </main>
                <ToastAlert />
            </TodoProvider>
        </ToastProvider>
    );
}

export default App;
