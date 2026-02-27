/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let currdepth=0,maxdepth=0
    for(let i of s)
    {
        if(i==='(')
        {
            currdepth++
            maxdepth=Math.max(currdepth,maxdepth)
        }
        else if(i===')'){
            currdepth--
        }
    }
    return maxdepth
};