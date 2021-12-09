/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    const top = { val: null, next: head };
    let length = 0;
    let ptr = top;
    while(ptr) {
        length++;
        ptr = ptr.next;
    }

    const diff = length - n;
    ptr = top;
    length = 1;
    while(length < diff) {
        length++;
        ptr = ptr.next;
    }

    ptr.next = ptr.next.next;

    return top.next;
};