/**
 * @param {string[]} strs
 * @return {string}
 * 
 Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"


Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 */
    var longestCommonPrefix = function(strs) {
    let returnStr = '';
    for(let i = 0; i < strs.length; i++) {
        for(let j = 0; j < strs[i].length; j++) {
            if(strs[i] === undefined || strs[i+1] === undefined || strs[i+2] === undefined) {
                return '';
            }
            if(strs[i][j] === strs[i+1][j] && strs[i][j] === strs[i+2][j]) {
                returnStr += strs[i][j];
            }
            else {
                return returnStr;
            }
        }
    }
    return returnStr;
};

console.log(longestCommonPrefix(['a']));