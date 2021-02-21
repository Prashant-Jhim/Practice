function BubbleSort(InputArr){
    var len = InputArr.length 
    console.log('Bubble Sort is Been Selected')
    for (let i = 0 ; i < len ; i++){
        for (let j = 0 ; j < len ; j++){
            if (InputArr[j] > InputArr[j+1]){
                var Temp = InputArr[j]
                InputArr[j] = InputArr[j + 1]
                InputArr[j + 1] = Temp
            }
            
    }
    if (i != len - 1){
        console.log(` Step ${i+1} ==> ${InputArr}`)
    }
    else{
        console.log(`The Sorted Array = ${InputArr}`)
    }
    
}
}
function MergeSort(Arr){
    if (Arr.length < 2){
        return
    }
    var step = 1
    var left,right
    while (step < Arr.length) {
        left = 0
        right = step
        while (right + step <= Arr.length) {
            MergeArrays(Arr,left,left+step,right,right+step)
            left = right + step
            right = left + step
        }
        if (right < Arr.length){
            MergeArrays(Arr,left,left+step,right,Arr.length)
        }
        step *= 2
    }
    console.log(Arr)
}
function MergeArrays(Arr,startleft,stopleft,startright,stopright){
    var rightarr = new Array(stopright - startright + 1)
    var leftarr = new Array(stopleft - startleft + 1)
    
    var k = startright
    for (let i = 0 ; i < rightarr.length - 1 ; i++){
        rightarr[i] = Arr[k]
        k++
    }
    
    var k = startleft
    for (let i = 0 ; i < leftarr.length - 1 ;i++){
        leftarr[i] = Arr[k]
        k++
    }
    rightarr[rightarr.length - 1] = Infinity
    leftarr[leftarr.length - 1] = Infinity
    
    var m = 0
    var n = 0
    for (let i = startleft ; i < stopright;i++){
        if (leftarr[m] <= rightarr[n]){
            Arr[i] = leftarr[m]
            m++
        }
        else{
            Arr[i] = rightarr[n]
            n++
        }
    }
}
function QuickSort(Arr){
    if (Arr.length == 0){
        return []
    }
    var pivot = Arr[0]
    var left = []
    var right = []
    for (let i = 1 ; i < Arr.length;i++){
        if (Arr[i] < pivot){
            console.log(`${Arr[i]} is Moving To Left`)
            left.push(Arr[i])
        }
        else{
            console.log(`${Arr[i]} is Moving To Right`)
            right.push(Arr[i])
        }
    }
    return QuickSort(left).concat(pivot,QuickSort(right))

}
function Shellsort(InputArr){
    var len = InputArr.length
    console.log('Shell Sort Is Been Selected')
    var h = 1
    while(h < len / 3){
        h = 3*h + 1
    }
    while (h >= 1){
        for (let i = h ; i < len ;i++){
            for (let j = i ; j >= h && InputArr[j] < InputArr[j - h]; j -= h){
                var Temp = InputArr[j]
                InputArr[j] = InputArr[j - h]
                InputArr[j - h] = Temp
                console.log(InputArr)
            }
        }
        h = (h - 1) / 3
    }
}
function SelectionSort(InputArr){
    
    var len = InputArr.length
    console.log('Selection Sort is Been Selected')
    for (let i = 0 ; i < len ;i++){
        var Min = i 
        for (let j = i + 1 ; j < len ; j++){
            if (InputArr[Min] > InputArr[j]){
                Min = j
            }
        }
        if (Min !== i){
            var Temp = InputArr[i]
            InputArr[i] = InputArr[Min]
            InputArr[Min] = Temp
           
        }
        console.log(InputArr)
        }
        
    }
    
    

function InsertionSort(InputArr){
    var len = InputArr.length
    console.log('Insertion Sort is Been')
    for (let i = 1 ; i < len ; i++){
        var Key = InputArr[i]
        var j = i - 1 
        while ( j >= 0 && InputArr[j] > Key) {
            InputArr[j + 1] = InputArr[j]
            j = j - 1
        }
        InputArr[j + 1] = Key
        if (i != len - 1){
            console.log(` Step ${i} ==> ${InputArr}`)
        }
        else{
            console.log(`The Sorted Array = ${InputArr}`)
        }
    }
    
}
var Length = parseInt(prompt('Enter the Length of Your Array'))
var ArraY = []
for (let i = 0 ; i < Length;i++){
    var Element = parseInt(prompt(`Enter The ${i + 1} th Element`))
    ArraY.push(Element)
}
console.log(`Array = ${ArraY}`)
var SortOption = confirm('Do You Want To Sort The Array')
if (SortOption == true){
    var OptionGiven = parseInt(prompt(`
Select The Option Below -    
1. For Bubble Sort 
2. For Selection Sort
3. For Insertion Sort
4. For Shell Sort
5. For Merge Sort
6. For Quick Sort
`))
if (OptionGiven == 1){
    var Intial = new Date().getTime()
    BubbleSort(ArraY)
    var Final = new Date().getTime()
    var TimeTaken = Final - Intial
    console.log(`Time Taken For Sorting = ${TimeTaken}ms`)
}
if (OptionGiven == 2){
    var Intial = new Date().getTime()
    SelectionSort(ArraY)
    var Final = new Date().getTime()
    var TimeTaken = Final - Intial
    console.log(`Time Taken For Sorting = ${TimeTaken}ms`)
}
if (OptionGiven == 3 ){
    var Intial = new Date().getTime()
    InsertionSort(ArraY)
    var Final = new Date().getTime()
    var TimeTaken = Final - Intial
    console.log(`Time Taken For Sorting = ${TimeTaken}ms`)
}
}
if (OptionGiven == 4){
    var Intial = new Date().getTime()
    Shellsort(ArraY)
    var Final = new Date().getTime()
    var TimeTaken = Final - Intial
    console.log(`Time Taken For Sorting = ${TimeTaken}ms`)
}
if (OptionGiven == 5){
    var Intial = new Date().getTime()
    MergeSort(ArraY)
    var Final = new Date().getTime()
    var TimeTaken = Final - Intial
    console.log(`Time Taken For Sorting = ${TimeTaken}ms`)
}
if (OptionGiven == 6){
    var Intial = new Date().getTime()
    console.log(QuickSort(ArraY))
    var Final = new Date().getTime()
    var TimeTaken = Final - Intial
    console.log(`Time Taken For Sorting = ${TimeTaken}ms`)
}
if (SortOption == false){
    alert('Thank You For Visiting Us')
}

