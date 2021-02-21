let a = []
function fibo(n1,n2){
  var N1 = n1
  var N2 = n2
  
  var nextterm = N1 + N2
  a.push(nextterm)
  if (a.length < 7){
    fibo(N2,nextterm)
  }
}
fibo(0,1)
for (let i of a){
  console.log(i) 
    
  
}