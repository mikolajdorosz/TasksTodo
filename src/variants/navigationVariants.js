const navigationVariants = {
    init: {
        y: "200vh",
        borderRadius: "4rem",
    },
    show: {
        y: "196vh",
        transition: {
            y: { type: "spring", duration: 1, bounce: 0.5 },
        },
    },
    hover: {
        y: "194vh",
        transition: { y: { type: "spring", bounce: 0.75 } },
    },
    exit: {
        y: "90vh",
        transition: { type: "spring", duration: 0.5 },
    },
};
export default navigationVariants;
