function LongestCommonPrefix(str){
    if (str.length == 0){
        return 'No'
    }
    else{
        var Str = str[0].split('')
        for (let i of str){
            for (let j = 0 ; j < Str.length ; j++){
                if (Str[j] != i[j]){
                    Str.splice(j,Str.length)
                }
            }
        }
        console.log(Str.join(''))
    }
}
LongestCommonPrefix(['flower','fly','flown'])