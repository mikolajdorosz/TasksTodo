export const toLocaleISOString = (date) => {
    const splitted = date.split("T");
    const time = splitted[1].split(":");
    const hour = (parseInt(time[0]) + 2) % 24;
    return `${splitted[0]}T${hour}:${time[1]}`;
};

export const diffBetweenDates = (date1, date2, t1, t2, t3, t4) => {
    const miliseconds = date2 - date1;
    const seconds = Math.floor((miliseconds / 1000) % 60);
    const minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(miliseconds / (1000 * 60 * 60 * 24));

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0)
        return `${t4}`;
    else if (days === 0) return `${hours}h ${minutes}min ${t1}`;
    else if (days === 1) return `${days} ${t2}`;
    else return `${days} ${t3}`;
};

export const formatDate = (date) => {
    const newDate = new Date(date);
    return (
        <>
            {newDate.toTimeString().slice(0, 5)}
            <br />
            {newDate.toLocaleDateString()}
        </>
    );
};
