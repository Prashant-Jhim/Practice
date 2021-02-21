function QuickSort(Arr){
  if (Arr.length == 0){
    return []
  }
  var Pivot = Arr[0]
  var left = []
  var right = []
  for (let i = 1 ; i < Arr.length ;i++){
    if (Arr[i] < Pivot){
      left.push(Arr[i])
    }
    if (Arr[i] > Pivot){
      right.push(Arr[i])
    }
  }
  return QuickSort(left).concat(Pivot,QuickSort(right))

}
function ShellSort(Arr){
  var N = Arr.length 
  var h = 1
  while (h < N / 3) {
    h = 3*h + 1
    
  }
  while (h >= 1) {
    for (let i = h ; i < N ; i++){
      for (let j = i ; j >=0 && Arr[j] < Arr[j - h]; j -= h){
        var Temp = Arr[j]
        Arr[j] = Arr[j - h]
        Arr[j - h] = Temp

      }
      h = (h - 1) / 3
    }
    
  }
}
function SelectionSort(Arr){
  var len = Arr.length 
  for (let i = 0 ; i < len ; i++){
    var Min = i
    for (let j = i + 1 ; j < len ; j++){
      if (Arr[j] > Arr[Min]){
        Min = j 
      }
      if (Min !== i){
        var Temp = Arr[i]
        Arr[i] = Arr[Min]
        Arr[Min] = Temp
      }
    }
  }
  return Arr
}
function InsertionSort(Arr){
  var Len = Arr.length
  for (let i = 1 ; i < Len ; i++){
    var key = Arr[i]
    var j = i - 1
    while (j >= 0 && Arr[j] > key) {
      Arr[j+1] = Arr[j]
      j = j - 1
      
    }
    Arr[j+1] = key
  }
  return Arr
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
      MergeArrays(Arr,left,left+step,right,right,right+step)
      left = right + step 
      right = left + step 
    }
    if (right < Arr.length){
      MergeArrays(Arr,left,left+step,right.Arr.length)
    }
    step *= 2
  }
  return Arr
}
function MergeArrays(Arr,Startleft,StopLeft,StartRight,StopRight){
  var rightarr = new Array(StopRight - StartRight + 1)
  var leftarr = new Array(StopLeft - Startleft + 1)

  var k = StartRight
  for (let i = 0 ; i < rightarr.length - 1 ;i++){
    rightarr[i] = Arr[k]
    k++
  }
  var k = Startleft
  for (let i = 0 ; i< leftarr.length - 1 ; i++){
    leftarr[i] = Arr[k]
    k++
  }
  rightarr[rightarr.length - 1] = Infinity
  leftarr[leftarr.length - 1] = Infinity

  var m = 0
  var n = 0
  for (let i = Startleft ; i < StopRight ; i++){
    if (leftarr[m] <= rightarr[n]){
      Arr[i] = leftarr[m]
      m++
    }
    else {
      Arr[i] = rightarr[n]
      n++
    }
  }
}