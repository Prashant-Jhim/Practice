var Year = parseInt(prompt("Enter The First Year = "))
var SecYear = parseInt(prompt("Enter The Second Year"))
var Month = parseInt(prompt("Enter The First Month Number"))
var SecMonth = parseInt(prompt("Enter THe Second Month"))
var Day = parseInt(prompt("Enter The First Month Day"))
var SecondDay = parseInt(prompt("Enter The Second Month Day"))
var date = new  Date(Year,Month,Day)
var SecDate = new Date(SecYear,SecMonth,SecondDay)
console.log(`The First Year = ${date.getFullYear()} 
The Second Year = ${SecDate.getFullYear()}`)
console.log(`The First Month = ${date.getMonth()} 
The Second Month = ${SecDate.getMonth()}`)
console.log(`The First Month Day = ${date.getDate()} 
The Second Month Day = ${SecDate.getDate()}`)
var ComparsionInDays = date.getDate() - SecDate.getDate()
var ComparsionInMonth = date.getMonth() - SecDate.getMonth()
var ComparsionInYears = date.getFullYear() - SecDate.getFullYear()
if (ComparsionInDays > 0){
    console.log(`The First Details Are Ahead of Second Details By Count Of ${ComparsionInDays} In Case Of Days`)
}
if (ComparsionInDays < 0){
    console.log(`The Second Details Are Ahead of First Details By Count Of ${-(ComparsionInDays)} In Case Of Days`)
}
if (ComparsionInMonth > 0){
    console.log(`The First Details Are Ahead of Second Details By Count Of ${ComparsionInMonth} In Case Of Months`)
}
if (ComparsionInMonth < 0){
    console.log(`The Second Details Are Ahead of First Details By Count Of ${-(ComparsionInMonth)} In Case Of Months`)
}
if (ComparsionInYears > 0){
    console.log(`The First Details Are Ahead of Second Details By Count Of ${ComparsionInYears} In Case Of Years`)
}
if (ComparsionInYears < 0){
    console.log(`The Second Details Are Ahead of First Details By Count Of ${-(ComparsionInYears)} In Case Of Years`)
}