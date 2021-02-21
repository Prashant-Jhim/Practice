var nums = [2,7,11,15]
var target = 9
function check(nums,target){
    for (let i = 0 ; i < nums.length ; i ++){
        var Number = nums[i]
        for (let j = i + 1 ; j < nums.length; j++){
            if (Number + nums[j] == target){
                console.log(`${nums.indexOf(Number)} ${j}`)
            }
        }  
        
        

    }
}
check(nums,target)