/*

Given an array arr of positive integers, consider all binary trees such that:

    Each node has either 0 or 2 children;
    The values of arr correspond to the values of each leaf in an in-order traversal of the tree.
    The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree, respectively.

Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node. It is guaranteed this sum fits into a 32-bit integer.

A node is a leaf if and only if it has zero children.



Example 1:

Input: arr = [6,2,4]
Output: 32
Explanation: There are two possible trees shown.
The first has a non-leaf node sum 36, and the second has non-leaf node sum 32.

Example 2:

Input: arr = [4,11]
Output: 44

 

Constraints:

    2 <= arr.length <= 40
    1 <= arr[i] <= 15
    It is guaranteed that the answer fits into a 32-bit signed integer (i.e., it is less than 231).

Accepted
66,572
Submissions
97,391

*/

class BinaryTreeNode {
	constructor(key, value = key, parent = null) {
		this.key = key
		this.value = value
		this.parent = parent
		this.left = null
		this.right = null
	}

	get isLeaf() {
		return this.left === null && this.right === null
	}

	get hasChildren() {
		return !this.isLeaf
	}
}

class BinaryTree {
	constructor(key, value = key) {
		this.root = new BinaryTreeNode(key, value)
	}

	*inOrderTraversal(node = this.root) {
		if (node.left) yield* this.inOrderTraversal(node.left)
		yield node
		if (node.right) yield* this.inOrderTraversal(node.right)
	}

	*postOrderTraversal(node = this.root) {
		if (node.left) yield* this.postOrderTraversal(node.left)
		if (node.right) yield* this.postOrderTraversal(node.right)
		yield node
	}

	*preOrderTraversal(node = this.root) {
		yield node
		if (node.left) yield* this.preOrderTraversal(node.left)
		if (node.right) yield* this.preOrderTraversal(node.right)
	}

	insert(
		parentNodeKey,
		key,
		value = key,
		{ left, right } = { left: true, right: true }
	) {
		for (let node of this.preOrderTraversal()) {
			if (node.key === parentNodeKey) {
				const canInsertLeft = left && node.left === null
				const canInsertRight = right && node.right === null
				if (!canInsertLeft && !canInsertRight) return false
				if (canInsertLeft) {
					node.left = new BinaryTreeNode(key, value, node)
					return true
				}
				if (canInsertRight) {
					node.right = new BinaryTreeNode(key, value, node)
					return true
				}
			}
		}
		return false
	}

	remove(key) {
		for (let node of this.preOrderTraversal()) {
			if (node.left.key === key) {
				node.left = null
				return true
			}
			if (node.right.key === key) {
				node.right = null
				return true
			}
		}
		return false
	}

	find(key) {
		for (let node of this.preOrderTraversal()) {
			if (node.key === key) return node
		}
		return undefined
	}
}
