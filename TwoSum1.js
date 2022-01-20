/* 

1. Two Sum
Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
Accepted
5,690,945
Submissions
11,833,659

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let map = new Map()

	// make hashmap of indices of each number
	for (let i = 0; i < nums.length; i++) {
		if (!map.has(nums[i])) map.set(nums[i], [i])
		else map.set(nums[i], [...map.get(nums[i]), i])
	}

	for (i = 0; i < nums.length; i++) {
		let diff = target - nums[i]
		if (map.has(diff) && diff != nums[i]) return [i, map.get(diff)[0]]
		else if (diff == nums[i] && map.get(diff).length >= 2)
			return [map.get(diff)[0], map.get(diff)[1]]
	}
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
