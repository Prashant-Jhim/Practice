var runningSum = function(nums) {
    var Arr = []
    var sum = 0
    for (let i = 0 ; i < nums.length ; i++){
        sum = sum + nums[i]
        Arr.push(sum)
    }
    console.log(Arr)
};
runningSum( [3,1,2,10,1])