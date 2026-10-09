export const caesar = (str, k) => {
    const abc = 'abcdefghijklmnopqrstuvwxyz';

    let sol = '';

    for (const letter of str) {
        const lowerLetter = letter.toLowerCase();
        let newLetter;
        if (abc.includes(lowerLetter)) {
            const index = abc.indexOf(lowerLetter);
            newLetter = abc.charAt(
                (((index + k) % abc.length) + abc.length) % 26
            );
            if (isUpper(letter)) {
                newLetter = newLetter.toUpperCase();
            }
        } else {
            newLetter = letter;
        }
        sol += newLetter;
    }
    return sol;
};

const isUpper = (letter) => {
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (uppers.includes(letter)) {
        return true;
    }
    return false;
};
