var removeDuplicates = function(nums) {
    let p1= 0;
    for(let p2 =1; p2<nums.length; p2++){
        if(nums[p1]!==nums[p2]){
            p1++;
            nums[p1] = nums[p2]
        }
    }
    console.log(p1+1)
};
removeDuplicates([1,1,2])