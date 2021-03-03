var shuffle = function(nums, N) {
    var n = 2*N
    var Master = []
    var x = []
    var y = []
    var mid = (Math.floor(n/2))
   for (let i = 0; i < nums.length; i++){
       if (i <= mid - 1){
           x.push(nums[i])
       }
       else{
           y.push(nums[i])
       }
   }
   for (let i = 0 ; i < n ; i++){
       if (i % 2 == 0){
        var Splice = x.splice(0,1)
        Master.push(Splice[0])
       }
       else{
           var Splice = y.splice(0,1)
           Master.push(Splice[0])
       }
   }
   console.log(Master)

    
};
shuffle([1,1,2,2],2)