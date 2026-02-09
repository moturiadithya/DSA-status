/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let arr=[]
    arr.push(intervals[0])
    for(let i=1;i<intervals.length;i++)
    {
        if(arr[arr.length-1][1]>=intervals[i][0]){
            let c=Math.max(arr[arr.length-1][1],intervals[i][1])
            arr[arr.length-1]=[arr[arr.length-1][0],c]
        }
        else{
            arr.push(intervals[i])
        }
    }
    return arr
};