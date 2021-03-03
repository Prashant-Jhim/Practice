var kidsWithCandies = function(candies, extraCandies) {
   var Comparsion  = []
   for (let i = 0 ; i < candies.length ; i++){
       var Sum =  0
       Sum = candies[i] + extraCandies
       var Data = []
       for (let j = 0 ; j < candies.length ; j++){
           if (Sum - candies[j] > -1){
               Data.push(1)
           }
       }
       
       if (Data.length == candies.length){
           Comparsion.push(true)
       }
       else{
           Comparsion.push(false)
       }
       
}
console.log(Comparsion)
}
kidsWithCandies([4,2,1,1,2],1)