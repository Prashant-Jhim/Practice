var sumZero = function(n) {
    var Num = Math.floor(n / 2)
    var Res = []
    for (let i = 1 ; i <=Num; i++){
        Res.push(i,-i)
    }
    if (n % 2 !=0){
        Res.push(0)
    }
    return Res
  };
console.log(sumZero(5))  