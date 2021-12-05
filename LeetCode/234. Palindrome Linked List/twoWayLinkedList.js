/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }

    let pre = head.next;
    let last = head;

    while(pre) {
        pre.pre = last;
        last = pre;
        pre = pre.next;
    }

    pre = head;
    while(last && pre.val === last.val) {
        pre = pre.next;
        last = last.pre;
    }

    return !last;
};