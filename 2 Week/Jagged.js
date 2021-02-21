// Jagged Row Example 
var Arry = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];
var total = 0
var average = 0.0
for (let row = 0 ; row < Arry.length;row++){
    for(let column = 0 ; column <Arry[row].length;column++){
        total = total + Arry[row][column]
        
    }
    average = total/Arry[row].length
    console.log(average.toFixed(2))
    total = 0
    average = 0.0
}
