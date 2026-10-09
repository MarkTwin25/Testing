export const analyze = (list) => {
    return {
        average: list.reduce((a, b) => a + b, 0) / list.length,
        min: Math.min(...list),
        max: Math.max(...list),
        length: list.length,
    };
};
