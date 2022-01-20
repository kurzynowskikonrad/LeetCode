/* 
809. Expressive Words
Medium

Sometimes people repeat letters to represent extra feeling. For example:

    "hello" -> "heeellooo"
    "hi" -> "hiiii"

In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo".

You are given a string s and an array of query strings words. A query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is three or more.

    For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has a size less than three. Also, we could do another extension like "ll" -> "lllll" to get "helllllooo". If s = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = s.

Return the number of query strings that are stretchy.

 

Example 1:

Input: s = "heeellooo", words = ["hello", "hi", "helo"]
Output: 1
Explanation: 
We can extend "e" and "o" in the word "hello" to get "heeellooo".
We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.

Example 2:

Input: s = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]
Output: 3

 

Constraints:

    1 <= s.length, words.length <= 100
    1 <= words[i].length <= 100
    s and words[i] consist of lowercase letters.
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
	let strGroups = getStringGroups(s)
	console.log(strGroups[0][0])
	let ans = 0
	for (let word of words) {
		let wordGroups = getStringGroups(word)
		ans += compareGroups(strGroups, wordGroups)
	}
	console.log(ans)
	return ans
}

// returns 1 is word is stretchy / 0 if not
const compareGroups = (strGroups, wordGroups) => {
	if (strGroups.length != wordGroups.length) return 0
	let matches = 0
	for (let i = 0; i < strGroups.length; i++) {
		// letters not the same
		if (strGroups[i][0] != wordGroups[i][0]) return 0
		// shrink
		if (strGroups[i].length < wordGroups[i].length) return 0
		// stretch less than 3
		if (strGroups[i].length < 3 && strGroups[i].length != wordGroups[i].length)
			return 0
	}
	return 1
}

const getStringGroups = (s) => {
	let strGroups = []
	let group = ''
	for (let i = 0; i < s.length; i++) {
		let curr = s[i]
		if (curr != s[i + 1] && group.length == 0) strGroups.push(curr)
		else if (curr != s[i + 1] && group.length != 0) {
			group += curr
			strGroups.push(group)
			group = ''
		} else {
			group += curr
		}
	}
	console.log(strGroups)
	return strGroups
}

expressiveWords('heeellooo', ['hello', 'hi', 'helo'])
expressiveWords('zzzzzyyyyy', ['zzyy', 'zy', 'zyy'])
expressiveWords('buurrr', ['burr'])
