var sumOfUnique = function(nums) {
    var set = new Set()
    var Real = []
    for (let i = 0 ; i < nums.length ; i++){
        set.add(nums[i])
    }
    for (let i of set ){
        Real.push(i)
    }
    for (let i = 0 ; i < Real.length ; i++){
        var Count = 0
        for (let j = 0 ; j < nums.length ; j++){
            if (Real[i] == nums[j]){
                Count++
            }
        }
        if (Count != 1){
            while(nums.indexOf(Real[i]) != -1){
                var Index = nums.indexOf(Real[i])
                nums.splice(Index,1)
        }
    }
        
    }
  if (nums.length == 0){
      return 0
  }
  else{
    return nums.reduce((a,b)=>{return a + b})
  }
    
      
  }
console.log(sumOfUnique([1,2,3,4,5]))