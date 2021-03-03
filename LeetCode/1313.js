var decompressRLElist = function(nums) {
    var Master = []
    var frequency = []
    var Value = []
    for (let i = 0 ; i <nums.length ;i++){
        if (i % 2 ==0){
            frequency.push(nums[i])
        }
        else {
            Value.push(nums[i])
        }
    }   
        for (let i = 0 ; i < Value.length ; i++){
            for (let j = 0 ; j < frequency[i]; j++){
                Master.push(Value[i])
            }
        }
    
    return Master
};
console.log(decompressRLElist([1,2,3,4]))