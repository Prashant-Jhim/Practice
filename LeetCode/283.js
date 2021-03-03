var moveZeroes = function(nums) {
    var Arr = nums
    var Count = 0
    for (let i = 0 ; i < Arr.length ; i++){
        var IndexOfZero = Arr.indexOf(0)
        if (IndexOfZero > - 1){
            Arr.splice(IndexOfZero,1)
            Count++
        }
    }
    for (let i = 0 ; i < Count ; i++){
        Arr.push(0)
    }
    console.log(Arr)
    
};
moveZeroes([0,1,0,3,12])