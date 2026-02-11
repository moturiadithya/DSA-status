var numSubarrayProductLessThanK = function(nums, k) {
    let l=0,r=0,product=1,ans=0
    while(r<nums.length)
    {
        product*=nums[r]
        while(l<nums.length && product>=k)
        {
            product/=nums[l]
            l++
        }
        if(l<=r)ans+=(r-l+1)
        r++
    }
    return ans
};