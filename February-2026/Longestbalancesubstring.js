
var longestBalanced = function(s) {
            let max = 0;

            for (let i = 0; i < s.length; i++) {
            let arr = new Array(26).fill(0);

            for (let j = i; j < s.length; j++) {
                arr[s[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;

                if (valid(arr)) {
                max = Math.max(max, j - i + 1);
                }
            }
            }

    function valid(arr) {
            let freq = 0;

            for (let x of arr) {
                if (x !== 0) {
                if (freq === 0) freq = x;
                else if (freq !== x) return false;
                }
            }

            return true;
            }
        return max
    
};