// Program Similar To School Fees Due Checking and Giving Last Date To Pay The Fees
var date = new Date()
var Time = date.toLocaleTimeString()
var DateNow = date.getUTCDate()
var Year = date.getUTCFullYear()
var Month = date.getUTCMonth() + 1 
var User = prompt("Enter The Student Name")
var User = User.toLowerCase()
var AdmNo = prompt("Enter The Admission No")
if (User == "prashant kumar"&& AdmNo == 1629){
    console.log('Fees Still Have To Be Paid')
    console.log(`Last Date Of Paying Fees = ${DateNow}/${Month}/${Year}`)
}