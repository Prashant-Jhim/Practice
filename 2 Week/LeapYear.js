// Program To Check Leap Year Or To Find Leap Year
function Leap(Year){
    if (Year % 4 == 0 || Year % 100 == 0 || Year % 400 == 0){
        console.log(`${Year} Is Leap Year`)
    }
    else {
        console.log(`${Year} Is Not Leap Year`)
    }
}
Leap(2023)
console.log('After')

var Year = parseInt(prompt("Enter The Yeay"))
var LeapCheck = new Date(Year,1,29)
var CheckLeap = LeapCheck.getDate()
if (CheckLeap == 29){
    console.log(`${Year} Is Leap Year`)
}
else {
    console.log(`${Year} Is Not Leap Year`)
}
