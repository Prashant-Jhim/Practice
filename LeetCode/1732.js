var largestAltitude = function(gain) {
    const odd = []
    var Arr = [0]
    for (let i = 0 ; i < gain.length ;i++ ){
        if (i > 1){
            odd.push(gain[i])
            var Sum = odd.reduce((a,b)=>{
            return a + b
            
        })
        Arr.push(Sum)
        }
        else {
            Arr.push(gain[i])
            odd.push(gain[i])
           
        }
       
    }
    Arr[2] = gain[0] + gain[1]
    return Arr
    
};
console.log(largestAltitude([-5,1,5,0,-7]))