let a = parseInt(prompt("Enter The Number = "))
let b = []

function print(num){
    b.push(num)
    if (num ==1){
        let io = b.reduce((a,b) =>{
            return a*b
        })
        console.log(io)
    } 
    if (num != 1){
        var next = num - 1
        print(next)
    }
    

}
print(a)
