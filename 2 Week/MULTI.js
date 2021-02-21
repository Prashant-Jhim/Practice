var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]
var total = 0
var average = 0.0
for (var row = 0 ; row < grades.length;row++){
    for (var columns = 0 ; columns < grades[row].length; columns++){
        total = total + grades[row][columns]
        

    }
    average = total/grades[row].length
    var av = average.toFixed(2)
    console.log(av)
    var total = 0
    var average = 0.0