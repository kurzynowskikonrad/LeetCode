// return boolean
const isAnagram = (val1, val2) => {
	if (val1.length != val2.length) return false
	let map1 = {}
	let map2 = {}
	console.log(str1)
	for (let character in val1) {
		if (map1[character] != null) map1[character] = 1
		map1[character] += 1
	}
	for (let character in val2) {
		if (map2[character] != null) map2[character] = 1
		map2[character] += 1
	}

	console.log(map1)
	console.log(map2)
	if (map1 === map2) return true
	else return false
}

console.log(isAnagram('abc', 'cab'))
