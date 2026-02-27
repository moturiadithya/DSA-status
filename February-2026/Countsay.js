
var countAndSay = function(n) {
    if (n === 1) return "1";

    let c = "1";

    for (let i = 1; i < n; i++) {

        let count = 1;
        let k = c[0];
        let a = "";
        let j = 1;

        while (j < c.length) {
            if (c[j] === k) {
                count++;
            } else {
                a += count;
                a += k;
                k = c[j];
                count = 1;   // reset to 1 (not 0)
            }
            j++;
        }

        // 🔥 Add last group (important fix)
        a += count;
        a += k;

        c = a;   // 🔥 update for next iteration
    }

    return c;
};