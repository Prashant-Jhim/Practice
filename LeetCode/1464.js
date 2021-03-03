var maxProduct = function(nums) {
    var Values = []
    for (let i = 0 ; i < nums.length ; i++){
      for (let j = i ; j < nums.length ; j++){
        var Value = (nums[i] - 1)*(nums[j] - 1)
        Values.push(Value)
      }
    }
    console.log(Values)
    var Arr = Values.sort(function(a,b){return a - b})
       console.log(Arr[Arr.length - 2])
  };
maxProduct([3,4,5,2])