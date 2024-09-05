const LS_KEY = "tasks";

export const updateLocalStorage = (tasks) => {
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));
};

export const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem(LS_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];
};
