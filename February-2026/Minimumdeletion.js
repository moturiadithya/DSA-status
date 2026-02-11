
var minimumDeletions = function(s) {
    let max=0,count=0
    for(let i=0;i<s.length;i++)
    {
        if(s[i]==='b')
        {
            count++
        }
        else{
            max=Math.min(count,max+1)
        }
    }
    return max
}