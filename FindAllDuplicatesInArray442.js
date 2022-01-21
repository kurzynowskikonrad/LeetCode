/*

https://leetcode.com/problems/find-all-duplicates-in-an-array/

442. Find All Duplicates in an Array
Medium

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

Example 2:

Input: nums = [1,1,2]
Output: [1]

Example 3:

Input: nums = [1]
Output: []

 

Constraints:

    n == nums.length
    1 <= n <= 10^5
    1 <= nums[i] <= n
    Each element in nums appears once or twice.

Accepted
363,472
Submissions
505,923

*/

/*

=================
ADDTL CONSTRAINTS
=================

Given sorted array of integers (NB. it can be array of negative, 0, positive values) return a list of duplicate values?

Assume the array size is less than or equal to 10^5. And the array elements are in the range of [-100000, 100000]

You can update input array but it's data type should remain the same (as array of integers).

The question is straight forward but the challenge is to answer this in O(N) time complexity and O(1) space complexity.

No sorting, no extra memory, no additional data structure.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
1 1000 0110 1010 0000 = 100,000 in binary
11 1000 0110 1010 0000 = 231,072 in binary

=================
    PROCESS
=================

** 131072 (turn on bit at position 17 (2^17))

loop thru array and identify unique values by turning
on their 2^17 bit
loop thru array again and remove values > 131072 or < -131072

*/
var findDuplicates = function (nums) {
	let mask = 131072
	if (nums.length == 1) return []
	for (let i = 1; i < nums.length; i++) {
		if (i == nums.length - 1 && nums[i - 1] != nums[i]) {
			nums[i - 1] >= 0 ? (nums[i - 1] |= mask) : (nums[i - 1] &= ~mask)
			nums[i] >= 0 ? (nums[i] |= mask) : (nums[i - 1] &= ~mask)
		} else if (i == nums.length - 1 && nums[i - 1] == nums[i]) {
			nums[i - 1] >= 0 ? (nums[i - 1] |= mask) : (nums[i - 1] &= ~mask)
		} else if (nums[i - 1] != nums[i]) {
			nums[i - 1] >= 0 ? (nums[i - 1] |= mask) : (nums[i - 1] &= ~mask)
		}
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > mask || nums[i] < -mask) {
			nums.splice(i, 1)
			i = i - 1
		}
	}
	return nums
}

console.log(
	findDuplicates([-100000, -100000, 1, 1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 78, 99])
)
