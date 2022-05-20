/**
 * @param {number} x
 * @return {boolean}
 */
    const input = 1000021

    var isPalindrome = function(x) {
        let isPalin = false;
        let compStr = x.toString();
        let j = compStr.length - 1;
        for(let i = 0; i < compStr.length; i++) {
            if(compStr[i] === compStr[j]) {
                isPalin = true;
            }
            else{
                isPalin = false;
                return isPalin;
            }
            j--;
        }   
        return isPalin;
    };

console.log(isPalindrome(input));