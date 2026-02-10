 
var maxArea = function(height) {
    let i=0,j=height.length-1,max=0
    while(i<j)
    {
        if(height[i]<height[j])
        {
            let c=height[i]*(j-i)
            max=Math.max(c,max)
            i++
        }
        else{
            let c=height[j]*(j-i)
            max=Math.max(c,max)
            j--
        }
    }
    return max
};