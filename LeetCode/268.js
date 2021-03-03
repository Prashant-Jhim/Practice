var missingNumber = function(nums) {
    var Arr = nums.sort(function(a,b){return a - b})
    if (Arr[0] == 1){
        console.log(0)
    }
    var Data = []
    for (let i = 0 ; i < Arr.length ; i++){
        if (Arr[i]+1 != Arr[i+1] ){
            var Missing = Arr[i]+1
            Data.push(Missing)
        }
    }
    if (Arr[Arr.length - 1] < Data){
        console.log(Data[0])
    }
    else{
        Data.pop()
        console.log(Data[0])
    }
    

    
};
missingNumber([1])
