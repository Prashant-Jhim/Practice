var flipAndInvertImage = function(image) {
    var Horizon = []
    var Zero = []
    var One  = []
    for (let i = 0 ; i < image.length ; i++){
        var Arr = []
        for (let j = image[i].length ; j >= 0 ; j--){
            if (image[i][j] != undefined){
                Arr.push(image[i][j])
            }
        }
        Horizon.push(Arr)
       
    }
    for (let i = 0 ; i < Horizon.length;i++){
        for (let j = 0 ; j < Horizon[i].length ; j++){
            if (Horizon[i][j] == 1){
                One.push([i , j])
            }
            if (Horizon[i][j] == 0){
                Zero.push([i , j])
            }
            
        }
    }
    for (let i = 0 ; i < Zero.length ; i++){
        var Ar = Zero[i]
        
            Horizon[Ar[0]][Ar[1]] = 1
            
        
    }
    for (let i = 0 ; i < One.length ; i++){
        var Ar = One[i]
        
            Horizon[Ar[0]][Ar[1]] = 0
        
    }
    console.log(Horizon)


    
};
flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])