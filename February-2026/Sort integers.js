var sortByBits = function(arr) {
    arr.sort((a,b)=>{
        let count = 0, count1 = 0
        let c = a
        let d = b
        while(c > 0){
            count += c & 1
            c = c >> 1
        }
        while(d > 0){
            count1 += d & 1
            d = d >> 1
        }
        if(count === count1){
            return a - b
        }
        return count - count1
    })

    return arr
};