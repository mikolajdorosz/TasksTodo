import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ThemeSwitcher() {
    const location = useLocation();

    useEffect(() => {
        changeTheme();
    }, [location.pathname]);

    const changeTheme = () => {
        const header = document.getElementsByTagName("header")[0];
        const root = document.scrollingElement;

        const black = getComputedStyle(root).getPropertyValue("--bs-black");
        const white = getComputedStyle(root).getPropertyValue("--bs-white");

        if (location.pathname === "/") {
            setTimeout(() => {
                document.body.classList.remove("bg-black", "text-white");
                document.body.classList.add("bg-white", "text-black");
                header.style.backgroundColor = white;
                header.style.color = black;
            }, 500);
        } else {
            setTimeout(() => {
                document.body.classList.remove("bg-white", "text-black");
                document.body.classList.add("bg-black", "text-white");
                header.style.backgroundColor = black;
                header.style.color = white;
            }, 500);
        }
    };
    return null;
}

export default ThemeSwitcher;
