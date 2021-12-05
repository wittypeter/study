/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let lenA = 0;
    let preA = headA;
    while(preA) {
        lenA++;
        preA = preA.next;
    }

    let lenB = 0;
    let preB = headB;
    while(preB) {
        lenB++;
        preB = preB.next;
    }

    preA = headA;
    preB = headB;

    let diff = lenA - lenB;

    if (diff > 0) {
        while(diff--) {
            preA = preA.next;
        }
    } else {
        diff = -diff;
        while(diff--) {
            preB = preB.next;
        }
    }

    while(preA && preA !== preB) {
        preA = preA.next;
        preB = preB.next;
    }

    return preA;
};