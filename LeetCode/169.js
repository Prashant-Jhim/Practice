var majorityElement = function(nums) {
    var Arr = nums
    var len = nums.length 
    var Realset = new Set()
    for (let i of nums){
        Realset.add(i)
    }
    var Real = []
    for (let i of Realset){
        Real.push(i)
    }
    var Len = Math.floor(len / 2)

    for (let i = 0 ; i < Real.length ; i++){
        var Numof = 0
        for (let j = 0 ; j < len ; j++){
            
            if (Real[i] == Arr[j] ){
                Numof++
            }
            
            

        }
        if (Numof > Len){
            console.log(Real[i])
        }
    }
    
};
