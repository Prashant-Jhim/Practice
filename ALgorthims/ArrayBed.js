function CArray(NumOfElements){
    this.dataStore = []
    this.pos = 0
    this.insert = insert 
    this.NumOfElements = NumOfElements
    this.BubbleSort = bubbleSort 
    this.SelectionSort = SelectionSort
    this.ShellSort = ShellSort
    this.MergeSort = MergeSort
    this.InsertionSort = InsertionSort 
    this.setData = setData 
    this.clear = clear 
    this.swap = swap 
    this.toString = toString
    for (let i = 0 ; i < this.NumOfElements;i++){
        this.dataStore[i] = i
    }
}
function insert(element){
    this.dataStore[this.pos] = element
    this.pos++
}

function setData(){
    for (let i = 0 ; i < this.NumOfElements;i++){
        this.dataStore[i] = Math.floor(Math.random()*(this.NumOfElements + 1))
    }
}
function InsertionSort(InputArr){
    var Len = InputArr.length
    for (let i = 1 ; i < Len;i++){
        var Key = InputArr[i]
        var j = i - 1
        while(j >= 0 && InputArr[j] > Key){
            InputArr[j+1] = InputArr[j]
            j = j - 1
        }
        InputArr[j+1] = Key
    }
    return InputArr
}
function ShellSort(Arr){
    var N = Arr.length 
    var h = 1
    while(h < N / 3){
      h = 3 * h + 1
    }
    while (h >= 1){
      for (var i = h ; i < N ; i++ ){
        for (var j = i ; j >= h && Arr[j] < Arr[j - h]; j -= h){
          var Temp = Arr[j]
          Arr[j] = Arr[j - h]
          Arr[j - h] = Temp
        }
      }
      h = (h - 1)/ 3
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
      while (right + step <= Arr.length){
        MergeArrays(Arr,left,left+step,right,right+step)
        left = right + step 
        right = left + step 
      }
      if (right < Arr.length){
        MergeArrays(Arr,left,left+step,right,Arr.length)
      }
      step *= 2
      
    }
    return Arr
  }
  function MergeArrays(Arr,startLeft,stopleft,startRight,stopright){
    var rightArr = new Array(stopright - startRight+1)
    var leftArr = new Array(stopleft - startLeft + 1)
    var k = startRight
    for (let i = 0 ; i < rightArr.length - 1; i++){
      rightArr[i] = Arr[k]
      ++k
    }
  
  var k = startLeft
  for (let i = 0 ; i < leftArr.length - 1 ; i++){
      leftArr[i] = Arr[k]
    k++
  }
  rightArr[rightArr.length - 1] = Infinity
  leftArr[leftArr.length - 1] = Infinity
  var m = 0
  var n = 0
  for (let k = startLeft ; k < stopright;k++){
    if (leftArr[m] <= rightArr[n]){
      Arr[k] = leftArr[m]
      m++
    }
    else {
      Arr[k] = rightArr[n]
      n++
    }
  }
  }
  

function SelectionSort(InputArr){
    var Len = InputArr.length
    for (let i = 0 ; i < Len ;i++){
        var Min = i
        for (let j = i+1 ; j < Len ; j++){
            if (InputArr[Min] > InputArr[j]){
                Min = j
            }
        }
        if (Min !== i){
            var Temp = InputArr[i]
            InputArr[i] = InputArr[Min]
            InputArr[Min] = Temp
        }
    }
    return InputArr
}
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
        
    }
    return inputArr
    
};
function clear(){
    for (let i = 0 ; i < this.NumOfElements;i++){
        this.dataStore[i] = 0
    }
}
function toString(){
    var retStr = ''
    for (let i = 0 ; i < this.dataStore.length ; i++){
        retStr += this.dataStore[i] + ' ' + '' 
        if (i> 0 && i % 10 ==0){
            retStr += '\n'
        }
    }
    return retStr
}
function swap(Arr,index1,index2){
    var temp = Arr[index1]
    Arr[index1] = Arr[index1]
    Arr[index2] = temp
}
var Numbers = new CArray(20)
Numbers.setData()
console.log(Numbers.toString())
console.log('\n')
console.log('Bubble Sort')
console.log(Numbers.BubbleSort(Numbers.dataStore))
console.log('\n')
console.log('Selection Sort')
console.log(Numbers.SelectionSort(Numbers.dataStore))
console.log('\n')
console.log('Insertion Sort')
console.log(Numbers.InsertionSort(Numbers.dataStore))
console.log('\n')
console.log('Shell Sort')
console.log('   ')
console.log(ShellSort(Numbers.dataStore))
console.log(' ')
console.log('Merge Sort')
console.log('\n')
console.log(Numbers.MergeSort(Numbers.dataStore))


