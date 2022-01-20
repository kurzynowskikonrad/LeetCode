// determine wether or not there is a path connecting the src node
// to the dst node

// iterative approach
/* const hasPath = (graph, src, dst) => {
	const queue = [src]
	while (queue.length > 0) {
		const curr = queue.shift()

		if (curr == dst) return true

		for (let neighbor of graph[src]) {
			queue.push(neighbor)
		}
	}

	return false
} */

// recursive approach - doesn't work (lul)
/* const hasPath = (graph, src, dst) => {
	if (src == dst) return true

	for (let neighbor of graph[src]) {
		if (hasPath(graph, neighbor, dst) == true) return true
	}

	return false
} */

/* const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [],
} */

// console.log(hasPath(graph, 'a', 'f'))

const undirectedPath = (edges, nodeA, nodeB) => {
	let graph = convertEdges(edges)
	console.log(graph)

	console.log(hasPath(graph, nodeA, nodeB, new Set()))
}

const hasPath = (graph, src, dst, visited) => {
	if (src == dst) return true
	if (visited.has(src)) return false

	visited.add(src)

	for (let neighbor of graph[src]) {
		if (hasPath(graph, neighbor, dst, visited) == true) {
			return true
		}
	}

	return false
}

const convertEdges = (edges) => {
	let graph = {}
	for (let pair of edges) {
		addNodes(graph, pair[0], pair[1])
	}
	return graph
}

const addNodes = (graph, val1, val2) => {
	if (graph[val1] == null) {
		graph[val1] = [val2]
	} else if (graph[val1] != null) {
		graph[val1].push(val2)
	}
	if (graph[val2] == null) {
		graph[val2] = [val1]
	} else if (graph[val2] != null) {
		graph[val2].push(val1)
	}
}

const edges = [
	['i', 'j'],
	['k', 'i'],
	['m', 'k'],
	['k', 'l'],
	['o', 'n'],
]

undirectedPath(edges, 'j', 'm')
