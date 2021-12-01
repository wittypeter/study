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

    const dfs = function dfs(root, res) {
        if (root.left) {
            dfs(root.left, res);
        }

        res.push(root.val);

        if (root.right) {
            dfs(root.right, res);
        }
    };

    root && dfs(root, res);

    return res;
};