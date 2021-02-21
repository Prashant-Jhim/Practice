function BankAcc(balance){
    this.AvBalance = balance
    this.deposit = deposit
    this.withdrawl = withdraw
}
function deposit(Amount){
    this.AvBalance += Amount
}
function withdraw(Amount){
    this.AvBalance -= Amount
}
var t = new BankAcc(15000)
alert(`The Available Bank Balance = ${t.AvBalance}`)
var a = prompt('Do You Want To Withdraw/Deposit Cash')
var a = a.toLowerCase()
if (a == 'withdraw'){
    let y = parseInt(prompt('Enter The Amount You Want To Withdraw = '))
    t.withdrawl(y)
    console.log(`The Available Bank Balance = ${t.AvBalance}`)
}
if (a == 'deposit'){
    let u =  parseInt(prompt('Enter The Amount You Want To Deposit = '))
    t.deposit(u)
    console.log(`The Available Bank Balance = ${t.AvBalance}`)
}

