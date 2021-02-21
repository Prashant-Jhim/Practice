function Queue(){
    this.data = []
    this.enqueue = enqueue
    this.dequeue = dequeue 
    this.front = front 
    this.back = back 
    this.empty = empty
}
function enqueue(element){
    this.data.push(element)
}
function dequeue(){
    return this.data.shift()
}
function front(){
    return this.data[0]
}
function back(){
    return this.data[this.data.length-1]
}
function empty(){
    if(this.data.length ==0){
        return true
    }
    else {
        return false
    }
}
function distribute(nums,queues,n,digit){
    for(var i = 0 ; i <n; i++ ){
        if (digit == 1){
            queues[nums[i]%10].enqueue(nums[i])
        }
        else{
            queues[Math.floor(nums[i]/10)].enqueue(nums[i])

        }
    }
}
function collect(queues,nums){
    var i = 0 ;
    for (var digit = 0 ; digit <10 ; ++digit){
        while(!queues[digit].empty()){
            nums[i++] = queues[digit].dequeue()
        }
    }
}
function dispArray(arr){
    for (let i = 0 ; i < arr.length ; i++){
        console.log(arr[i] + ' ')
    }
}
var queues = []
for (let i = 0 ; i < 10 ; i++){
    queues[i] = new Queue()
}
var nums = []
for (let i = 0 ; i < 10 ; i++){
    nums[i] = Math.floor((Math.random()*101))
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums)
distribute(nums, queues,10,10)
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);