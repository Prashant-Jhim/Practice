var heightChecker = function(heights) {
    var Changes = 0
    var Prev = []
    for (let i of heights){
        Prev.push(i)
    }
    var sort = heights.sort(function(a,b){
        return a - b
    })
    for (let i = 0 ; i < sort.length ; i++){
        if (sort[i] != Prev[i]){
            Changes++
        }
    }
    console.log(Changes)
};
heightChecker([5,1,2,3,4])