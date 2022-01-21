/*

https://leetcode.com/problems/binary-tree-maximum-path-sum/

124. Binary Tree Maximum Path Sum
Hard

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

 

Example 1:

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2:

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

 

Constraints:

    The number of nodes in the tree is in the range [1, 3 * 10^4].
    -1000 <= Node.val <= 1000

Accepted
656,833
Submissions
1,766,065

*/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// left child index = parent_idx * 2 + 1
// right child index = parent_idx * 2 + 2
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
// root length range 1 to 30,000
// root value range -1000 to 1000
// 30,000 * -1,000 = -30000000
function maxPathSum(root) {
    let ans = -30000000;
    const maxPathSumDownFrom = (root) => {
        if (root == null)
            return 0;
        let left = Math.max(maxPathSumDownFrom(root.left), 0);
        let right = Math.max(maxPathSumDownFrom(root.right), 0);
        ans = Math.max(ans, root.val + left + right);
        return root.val + Math.max(left, right);
    };
    maxPathSumDownFrom(root);
    return ans;
}
console.log(maxPathSum(new TreeNode(1, new TreeNode(2), new TreeNode(3))));
console.log(maxPathSum(new TreeNode(-3)));
//# sourceMappingURL=BinaryTreeMaxPathSum124.js.map