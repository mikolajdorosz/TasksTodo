import { useState, useEffect } from "react";

function ScrollbarHandler() {
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        document.body.classList.add("scrollbar-0");
        document.addEventListener("scroll", showScrollbar);

        return () => {
            window.removeEventListener("scroll", showScrollbar);
        };
    }, []);
    useEffect(() => {
        const newTimeout = setTimeout(() => hideScrollbar(), 5000);

        return () => {
            clearTimeout(newTimeout);
        };
    }, [scrollY]);

    const showScrollbar = () => {
        document.body.classList.add("scrollbar-1");
        setScrollY(window.scrollY);
    };
    const hideScrollbar = () => {
        document.body.classList.remove("scrollbar-1");
    };

    return null;
}

export default ScrollbarHandler;
