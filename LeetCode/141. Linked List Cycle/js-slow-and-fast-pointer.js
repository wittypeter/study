/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }

    let faster = head.next;
    let lower = head;

    while(faster !== lower) {
        if (!faster || !faster.next) {
            return false;
        }

        faster = faster.next.next;
        lower = lower.next;
    }

    return true;
};