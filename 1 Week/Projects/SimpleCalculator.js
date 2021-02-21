alert('Simple Calculator')
let a = parseInt(prompt("Enter The Number = "))
let b = parseInt(prompt("Enter The Other Number = "))

if (Number.isInteger(a) == true && Number.isInteger(b)== true){
    
    
    
    let h = prompt("(+) For Addition , (-) for substration , (*) for multiplication , (/) for divide = ")
    if (h == '+'){
        sum = a + b
        console.log(sum)
        document.write(sum)
    }
    if ( h == '-'){
        sub = a-b 
        console.log(sub)
        document.write(sub)
    }
    if (h == '*'){
        mul = a*b
        console.log(mul)
        document.write(mul)
    }
    if (h == '/'){
        div = a/b
        console.log(div)
        document.write(div)

    }
  
}
if (Number.isInteger(a) == false || Number.isInteger(b) == false){
    alert("Please Enter The Number Only")
    for (let i = 0; i <= 1000 ; i++){
        let k = parseInt(prompt('Enter The Number = '))
        let g = parseInt(prompt("Enter The Other Number = "))
        let x = prompt("(+) For Addition , (-) for substration , (*) for multiplication , (/) for divide = ")
        if (Number.isInteger(k)== true && Number.isInteger(g)== true){
            if (x == '+'){
                sum = k + g
                console.log(sum)
                document.write(sum)
            }
            if ( x == '-'){
                sub = k-g 
                console.log(sub)
                document.write(sub)
            }
            if (x == '*'){
                mul = k*g
                console.log(mul)
                document.write(mul)
            }
            if (x == '/'){
                div = k/g
                console.log(div)
                document.write(div)
            }
            break
           
            
            
        }
        if ( Number.isInteger(k) == false && Number.isInteger(g) == false){
            alert("Enter The Number Only")
        }

    }
}
