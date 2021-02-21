var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]
var total = 0
var average = 0.0
for (var columns = 0 ; columns < grades.length;columns++){
    for (var rows = 0 ; rows < grades[columns].length; rows++){
        total = total + grades[rows][columns]
    }
    average = total/grades[columns].length
    var av = average.toFixed(2)
    console.log(av)
    total = 0
    average = 0.0
}