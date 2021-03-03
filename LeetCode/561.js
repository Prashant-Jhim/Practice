var arrayPairSum = function(nums) {
    var arr = nums.sort(function(a,b){
      return a - b
    })
    var New = []
    var Mid = Math.floor(arr.length / 2)
    for (let i = 0 ; i < Mid ; i++){
      New[i] = new Array()
    }
    var Pos = 0
    for (let i = 0 ; i < New.length ; i++){
        for (let j = 0 ; j < 2;j++){
            New[i].push(arr[Pos])
            Pos++
        }
    }
    var Min = []
    for(let  i = 0 ; i < New.length;i++){
        Min.push(parseInt(New[i][0]))
    }
    var Ans = Min.reduce((a,b)=>{
        return a + b
    })
    return Ans
   };
console.log(arrayPairSum([1,4,3,2]))   