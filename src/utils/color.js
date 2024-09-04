export const randomHex = () => {
    const numbers = [];
    for (let i = 0; i < 3; i++) {
        numbers.push((Math.floor(Math.random() * 255) + 1).toString(16));
    }
    return `#${numbers[0]}${numbers[1]}${numbers[2]}`;
};
