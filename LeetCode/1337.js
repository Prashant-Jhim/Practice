var kWeakestRows = function(mat, k) {
    var value = []
    var rows = []
    var index = []
    for (let i = 0 ; i < mat.length;i++){
        rows[i] = 0
        value[i] = 0
    }
    for (let i = 0 ; i < mat.length ;i++){
      for (let j = 0 ; j < mat[i].length;j++){
           if (mat[i][j] == 1){
               value[i]++
               rows[i]++
           }
      }
    }
    var Sort = rows.sort(function(a,b){
        return a - b
    })
   
    for (let i = 0 ; i < Sort.length ; i++){
        var Index = value.indexOf(Sort[i])
        index.push(Index)
        value[Index] = 'a'
    }
    var Real = []
    for (let i = 0 ; i < k ; i++){
        Real.push(index[i])
    }
    return (Real)
  };
kWeakestRows([[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]],3)  