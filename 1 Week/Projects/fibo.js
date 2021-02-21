let a = [0,1]
var n1 = a[0]
var n2 = a[1]
var nextterm;
for (let i = 1 ; i <= 10;i++){
    nextterm = n1 + n2
    a.push(nextterm)
    n1 = n2
    n2 = nextterm

}
for (let j of a){
    console.log(j)
}