function Bridge(arr,k)
{
    let prev=arr[0],count=0
    for(let i=1;i<arr.length;i++)
    {
        if(prev+arr[i]>k)
        {
            count++
            prev=Math.min(arr[i],prev)
        }
        else{
            prev=arr[i]
        }
    }
}