/**
 * @param {string} s
 * @return {number}
 */
const countPalindromicSubsequence = (s = 'bbcbaba') => {
    const letters = s.split('');
    const uniqLetters = new Set(letters);
    let counter = 0;

    for (let u of uniqLetters) {
        let start = letters.indexOf(u);
        let end = letters.lastIndexOf(u);

        if (start < end) {
            counter += new Set(letters.slice(start + 1, end)).size;
        }
    }

    return counter;
};

countPalindromicSubsequence();
