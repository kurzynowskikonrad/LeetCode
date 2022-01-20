/*

1711. Count Good Meals
Medium

A good meal is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two.

You can pick any two different foods to make a good meal.

Given an array of integers deliciousness where deliciousness[i] is the deliciousness of the i​​​​​​th​​​​​​​​ item of food, return the number of different good meals you can make from this list modulo 109 + 7.

Note that items with different indices are considered different even if they have the same deliciousness value.

 

Example 1:

Input: deliciousness = [1,3,5,7,9]
Output: 4
Explanation: The good meals are (1,3), (1,7), (3,5) and, (7,9).
Their respective sums are 4, 8, 8, and 16, all of which are powers of 2.

Example 2:

Input: deliciousness = [1,1,1,3,3,3,7]
Output: 15
Explanation: The good meals are (1,1) with 3 ways, (1,3) with 9 ways, and (1,7) with 3 ways.

 

Constraints:

    1 <= deliciousness.length <= 105
    0 <= deliciousness[i] <= 220

Accepted
21,124
Submissions
75,394

*/

/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
	let map = arrayMap(deliciousness)
	let omit = []
	let cnt = 0
	let seen = new Map()

	for (const key of map.keys()) {
		seen.set(key, 1)
		if (map.get(key).length >= 2 && powerOf2(key * 2))
			cnt += nChooseK(map.get(key).length, 2)
		for (const key2 of map.keys()) {
			if (key != key2 && !seen.has(key2) && powerOf2(key + key2))
				cnt += map.get(key).length * map.get(key2).length
		}
	}
	return cnt
}

const nChooseK = (n, k) => {
	let n1 = factorial(n)
	let n2 = factorial(n - k)
	let n3 = factorial(k)

	return n1 / (n2 * n3)
}

const factorial = (n) => {
	var ans = 1
	for (var i = 2; i <= n; i++) ans = ans * i
	return ans
}

const arrayMap = (arr) => {
	let map = new Map()

	// make hashmap of indices of each number
	for (let i = 0; i < arr.length; i++) {
		if (!map.has(arr[i])) map.set(arr[i], [i])
		else map.set(arr[i], [...map.get(arr[i]), i])
	}

	return map
}

// check if num is a power of 2
const powerOf2 = (n) => {
	if (n == 1) return true
	else if (n % 2 != 0 || n == 0) return false
	return powerOf2(n / 2)
}

/* This solution was not accepted b/c of its runtime - O(n^2)(?) */
/* var countPairs = function (deliciousness) {
	let omit = []
	let cnt = 0
	for (let i = 0; i < deliciousness.length; i++) {
		omit.push(i)
		for (let j = omit.length; j < deliciousness.length; j++) {
			if (powerOf2(deliciousness[i] + deliciousness[j])) cnt += 1
		}
	}
	return cnt
} */

/* This solution was also denied b/c of runtime */
/* var countPairs = function (deliciousness) {
	let map = arrayMap(deliciousness)
	let omit = []
	let cnt = 0
	let seen = new Map()

	for (const key of map.keys()) {
		seen.set(key, 1)
		if (map.get(key).length >= 2 && powerOf2(key * 2))
			cnt += nChooseK(map.get(key).length, 2)
		for (const key2 of map.keys()) {
			if (key != key2 && !seen.has(key2) && powerOf2(key + key2))
				cnt += map.get(key).length * map.get(key2).length
		}
	}
	return cnt
} */

console.log(countPairs([1, 3, 5, 7, 9]))
console.log(countPairs([1, 1, 1, 3, 3, 3, 7]))
