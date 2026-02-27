
var minFlips = function(grid) {
         let count = 0;
        let count2 = 0;
        for (let i = 0; i < grid.length; i++) {
        let last = grid[i].length - 1;

        for (let j = 0; j < Math.floor(grid[i].length / 2); j++) {
            if (grid[i][j] !== grid[i][last]) {
            count++;
            }
            last--;
        }
        }

        for (let j = 0; j < grid[0].length; j++) {
        let last = grid.length - 1;

        for (let i = 0; i < Math.floor(grid.length / 2); i++) {
            if (grid[i][j] !== grid[last][j]) {
            count2++;
            }
            last--;
        }
        }

        return Math.min(count, count2);
};