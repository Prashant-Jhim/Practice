//Program to Check Given String Starts With Another String
var String1 = prompt("Enter The First String")
var String2 = prompt("Enter The Second String")
var Check = String2.startsWith(String1)
if (Check == true){
    console.log(`Yes Both ${String1} And ${String2} Have Same Starting`)
}
else {
    console.log(`No Both ${String1} And ${String2} Have Same Starting `)
}