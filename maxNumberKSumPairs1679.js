/* 

1679. Max Number of K-Sum Pairs
Medium

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

 

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.

 

Constraints:

    1 <= nums.length <= 105
    1 <= nums[i] <= 109
    1 <= k <= 109

Accepted
47,081
Submissions
87,991

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * this submission was accepted - O(n)
 */
var maxOperations = function (nums, k) {
	let map = new Map()
	let sums = []
	let max = 0

	// make hashmap of occurences of each number
	for (let num of nums) {
		if (!map.has(num)) map.set(num, 1)
		else map.set(num, map.get(num) + 1)
	}

	// count operations
	for (let num of nums) {
		let diff = k - num
		if (map.has(diff)) {
			if (diff == num && map.get(num) >= 2) {
				map.set(num, map.get(num) - 2)
				max += 1
			} else if (diff != num && map.get(num) >= 1 && map.get(diff) >= 1) {
				map.set(num, map.get(num) - 1)
				map.set(diff, map.get(diff) - 1)
				max += 1
			}
		}
	}

	console.log(max)
	return max
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * below approach took too long and did not pass - O(n^2)
 * /
/* var maxOperations = function (nums, k) {
	let map = new Map()
	let sums = []
	let max = 0
	let numArr = []

	for (let i = 0; i < nums.length; i++) {
		let num1 = nums[i]
		for (let j = 0; j < nums.length; j++) {
			if (numArr.length != nums.length) numArr.push({ val: nums[j], mark: 0 })
			if (
				i != j &&
				nums[i] + nums[j] == k &&
				!numArr[i].mark &&
				!numArr[j].mark
			)
				max += markIndices(numArr, i, j)
		}
	}
	console.log(max)
	return max
}


const markIndices = (numArr, i, j) => {
	numArr[i].mark = 1
	numArr[j].mark = 1
	return 1
} */

maxOperations([1, 2, 3, 4], 5)
maxOperations([3, 1, 3, 4, 3], 6)
