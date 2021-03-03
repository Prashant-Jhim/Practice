var findNumbers = function(nums) {
    var Count = 0
    var Arr = []
    for (let i = 0 ; i < nums.length ; i++){
        Arr[i] = []
    }
    for (let i = 0 ; i < nums.length ;i++){
        var real = String(nums[i])
        if (real.length % 2 == 0){
            
            Count++
        }
    }
    return (Count)
    
};
findNumbers([12,345,2,6,7896])