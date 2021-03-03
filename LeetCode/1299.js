var replaceElements = function(arr) {
    var large = new Set()
    var Real = []
    if (arr.length == 1){
      return [-1]
    }
    else{
      
      for (let i = 0 ; i < arr.length ; i++){
        for (let j = i + 1 ; j < arr.length ;j++){
          if (arr[i] < arr[j]){
            arr[i] = arr[j]
            
          }
          else{ 
            large.add(arr[i])
          }
          
         
          }
        }
      }
      for (let i of large){
          Real.push(i)
      }
      Real.sort(function(a,b){
          return a - b
      })
      var Largest = Real[Real.length - 1]
      var Index = arr.indexOf(Largest)
      arr.splice(Index,1)
      arr.push(-1)
      return arr
    }
     
console.log(replaceElements([17,18,5,4,6,1]))  