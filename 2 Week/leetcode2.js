
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let Array1 = []
let Final = []
var addTwoNumbers = function(l1, l2) {
    var sum = l1.reduce((a,b) =>{
         return '' +  a + b
     })
    var Sum = l2.reduce((c,d) =>{
         return '' + c + d
     })
    var sum = parseInt(sum)
    var Sum = parseInt(Sum)

    var Total = sum + Sum
    var total = Total.toString()

    for (let i of total){
        Array1.push(i)
    }
    for (let i = Array1.length - 1 ; i >= 0 ; i--){
        Final.push(Array1[i])
    }
    console.log(Final)

     
    
};
let  l1 = [2,4,3], l2 = [5,6,4]
addTwoNumbers(l1,l2)




