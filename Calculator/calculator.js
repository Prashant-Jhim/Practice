function Add(val){
    document.getElementById('Data').value += val
}
function Solve(){
    let x = document.getElementById('Data').value
    let y = eval(x)
    document.getElementById('Data').value =  y
}
function Clear(){
    document.getElementById('Data').value = ''
}
