function MergeSort(InputArr){
    if (InputArr.length < 2){
        return
    }
    var step = 1
    var left, right 
    while (step < InputArr.length) {
        left = 0
        right = step 
        while(right + step <= InputArr.length){
            MergeArrays(InputArr,left,left+step,right,right+step)
            left = right + step
            right = left + step
        }
        if (right < InputArr.length){
            MergeArrays(InputArr,left,left+step,right,InputArr.length)
        }
        step *= 2
        
    }
    console.log(InputArr)
}
function MergeArrays(Arr,StartLeft,StopLeft,StartRight,StopRight){
    var RightArr = new Array(StopRight - StartRight + 1)
    var LeftArr = new Array(StopLeft - StartLeft + 1)
    var k = StartRight
    for (let i = 0 ; i < RightArr.length - 1;i++){
        RightArr[i] = Arr[k]
        k++
    }
    var k = StartLeft
    for (let j = 0 ; j < LeftArr.length - 1 ; j++){
        LeftArr[j] = Arr[k]
        k++
    }
    RightArr[RightArr.length - 1] = Infinity
    LeftArr[LeftArr.length - 1] = Infinity
    var m = 0
    var n = 0
    for (let k = StartLeft; k < StopRight;k++){
        if (LeftArr[m] <= RightArr[n]){
            Arr[k] = LeftArr[m]
            m++
        }
        else{
            Arr[k] = RightArr[n]
            n++
        }
    }
}
MergeSort([9,8,7,6,5,4,3,2,1])