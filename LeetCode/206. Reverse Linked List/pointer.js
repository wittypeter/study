/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let pre = head.next;
    let last = head;
    last.next = null;
    let temp;

    while(pre) {
        temp = pre;
        pre = pre.next;
        
        temp.next = last;
        last = temp;
    }

    return last;
};