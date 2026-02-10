var longestBalanced = function(nums) {
    let max=0
    let hs=new Set(nums)
    for(let i=0;i<nums.length;i++)
    {
        let even=0,odd=0,len=0;
        for(let j=i;j<nums.length;j++)
        {
            if(nums[j]%2===0)
            {
                if(hs.has(nums[j]))
                even++
            }
            else{
                odd++
            }
            if(even===odd){
                max = Math.max(max, j - i + 1);  
            }
        }
    }
    return max
};