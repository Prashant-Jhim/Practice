// copying array in better Way to make sure each copied element formed array has its individual identity
function copy(arr1,arr2){
    for (let i = 0 ; i < arr1.length; i++){
        arr2[i] = arr1[i]
    }
}
var nums = []
for (var i = 0 ; i < 100;i++){
    nums[i] = i + 1
}
var sumnums = []
copy(nums,sumnums)
nums[0] = 4000
console.log(sumnums[0])
console.log(nums[0])