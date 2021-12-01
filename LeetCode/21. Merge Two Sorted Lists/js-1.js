/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    //  one of the list is null or both are null
    if (!list1 || !list2) {
        return list1 || list2;
    }

    let root = small = list1.val > list2.val ? list2 : list1;
    let large = list1.val > list2.val ? list1 : list2;
    let pre = small;

    while(small && large) {
        if (small.val <= large.val) {
            pre = small;
            small = small.next;
        } else {
            pre.next = large;
            pre = large;
            large = large.next;
            pre.next = small;
        }
    }

    if (large) {
        pre.next = large;
    }

    return root;
};