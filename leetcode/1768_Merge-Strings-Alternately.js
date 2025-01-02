/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1 = "abc", word2 = "pqr") {
    let result = '';
    let i = 0;
    while (i < (word1.length > word2.length ? word1.length : word2.length)) {
        if (word1[i]) result += word1[i];
        if (word2[i]) result += word2[i];
        ++i;
    }
    return result;
};
console.log(mergeAlternately("ab", "pqrs"));
