/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    const res = [];

    if (!root) {
        return res;
    }

    const stack = [];
    let p = root;

    while(stack.length || p) {
        if (p) {
            stack.push(p);
            p = p.left;
        } else {
            p = stack.pop();
            res.push(p.val);
            p = p.right;
        }
    }

    return res;
};