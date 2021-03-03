var diagonalSum = function(mat) {
    var Diagonal = []
    var BackDiagonal = []
    var pos = 0
    var Back = mat[0].length - 1
    for (let i = 0 ; i < mat.length ; i++){
        Diagonal.push(mat[i][pos])
        pos++
    }
    for (let i = 0 ; i < mat.length;i++){
        BackDiagonal.push(mat[i][Back])
        Back--
    }
    console.log()
    if (mat.length % 2 != 0){
        var Mid = Math.floor(Diagonal.length / 2)
        BackDiagonal.splice(Mid,1)
    }
    var Merge = Diagonal.concat(BackDiagonal)
    var Sum = Merge.reduce((a,b)=>{
        return a + b
    })
    console.log(Sum)
  
    
};
diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]])