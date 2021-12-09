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
 var addTwoNumbers = function(l1, l2) {
    let inc = 0;
    let temp;

    let pre1 = l1;
    let pre2 = l2;
    let ptr = pre1;

    while(pre1 && pre2) {
        temp = pre1.val + pre2.val + inc;

        pre1.val = temp % 10;
        inc = temp > 9 ? 1 : 0;
        ptr = pre1;

        pre1 = pre1.next;
        pre2 = pre2.next;
    }

    ptr.next = pre1 || pre2;
    
    let pre = ptr;
    ptr = ptr.next;

    while(ptr) {
        temp = ptr.val + inc;

        ptr.val = temp % 10;
        inc = temp > 9 ? 1 : 0;

        pre = ptr;
        ptr = ptr.next;
    }

    if (inc) {
        pre.next = {
            val: inc,
            next: null
        }
    }

    return l1;
};