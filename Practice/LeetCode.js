var Words = `
The nationalism of Hamilton was undemocratic. The democracy of Jefferson was,
in the beginning, provincial. The historic mission of uniting nationalism and
democracy was in the course of time given to new leaders from a region beyond
the mountains, peopled by men and women from all sections and free from those
state traditions which ran back to the early days of colonization. The voice
of the democratic nationalism nourished in the West was heard when Clay of
Kentucky advocated his American system of protection for industries; when
Jackson of Tennessee condemned nullification in a ringing proclamation that
has taken its place among the great American state papers; and when Lincoln
of Illinois, in a fateful hour, called upon a bewildered people to meet the
supreme test whether this was a nation destined to survive or to perish. And
it will be remembered that Lincoln's party chose for its banner that earlier
device--Republican--which Jefferson had made a sign of power. The "rail splitter"
from Illinois united the nationalism of Hamilton with the democracy of Jefferson,
and his appeal was clothed in the simple language of the people, not in the
sonorous rhetoric which Webster learned in the schools.`

var Words = Words.split(' ')
console.log(Words)
var Data = 'Jefferson'
var Positions = []
function CountOccur(Arr,Data){
    var Count = 0
    var Position = BinSearch(Arr,Data)
    if (Position > - 1){
        Count++
        for (let i = Position - 1 ; i >= 0 ; i--){
            if (Arr[i] == Data){
                Positions.push(i)
                Count++
            }
        }
        for (let i = Position + 1 ; i < Arr.length ; i++){
            if (Arr[i] == Data){
                Positions.push(i)
                Count++
            }
        }
    }
    return Count
}
function BinSearch(Arr,Data){
    var UpperBound = Arr.length - 1
    var LowerBound = 0
    while (LowerBound <= UpperBound){
        var Mid = Math.floor((UpperBound + LowerBound) / 2)
        if (Arr[Mid] < Data){
            LowerBound = Mid + 1
        }
        else if (Arr[Mid] > Data){
            UpperBound = Mid - 1
        }
        else {
            return Mid 
        }
    }
}
console.log(Positions)
console.log(BinSearch(Words,Data))