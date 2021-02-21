var number = prompt("Enter The Number Value")
var CurrencyFormat = '$ ' + number.toLocaleString('en-US',{
    style : 'currency',
    currency : 'USD'
})
console.log(CurrencyFormat)