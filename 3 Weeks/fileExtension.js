function FileExtension(input){
    var Module = input.split('.')
    console.log(Module[Module.length - 1])
}
var input = prompt("Enter The File Name")
FileExtension(input)
function fileExtension(input){
    var Module = input.substring(input.lastIndexOf('.')+1,input.length)
    console.log(Module)
}
fileExtension(input)