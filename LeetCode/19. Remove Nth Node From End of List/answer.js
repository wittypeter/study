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
    if (!n) {
        return head;
    }

    let length = 0;
    let pre = head;

    while(pre) {
        length++;
        pre = pre.next;
    }

    const diff = length - n;

    if (!diff) {
        return head.next;
    }

    length = 1;
    pre = head;
    while(length < diff) {
        length++;
        pre = pre.next;
    }

    pre.next = pre.next.next;

    return head;
};