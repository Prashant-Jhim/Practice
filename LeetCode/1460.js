var canBeEqual = function(target, arr) {
    var Arr = arr.sort(function(a,b){
      return a - b
    })
    var Target = target.sort(function(a,b){
      return a - b
    })
    var dex = 0
    for (let i = 0 ; i < Target.length;i++ ){
      if (Target[i] == Arr[i]){
        dex++
      }
    }
    if (dex == Target.length){
      return true
    }
    else{
      return false
    }
  };