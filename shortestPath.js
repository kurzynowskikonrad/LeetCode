// determine shortest path between two points A and B
const shortestPath = (edges, nodeA, nodeB) => {
	// use the list of edges to create an adjcency list (graph)
	let graph = createGraph(edges)

	// initialize queue used to traverse the graph
	let queue = [[nodeA, 0]]

	// perform breadth-first search of graph starting at nodeA
	return traverse(graph, queue, nodeB, new Set([nodeA]))
}

// traverse graph from src node until dst node is found
// and return the shortest length found between the two
// points else return -1 (no path found)
const traverse = (graph, queue, dst, visited) => {
	let def = -1

	// perform breadth-first search of graph by using
	// a queue - pop from the front (shift) and push
	// to the back FIFO
	while (queue.length > 0) {
		// pop from front of queue
		let [node, dist] = queue.shift()

		// if current node is the destination node then return
		// the length associated with it (which is the shortest
		// length based on breadth-first search)
		if (node == dst) return dist

		// otherwise iterate through neighbors of current node
		for (let neighbor of graph[node]) {
			if (!visited.has(neighbor)) {
				visited.add(neighbor)
				queue.push([neighbor, dist + 1])
			}
		}
	}

	// return -1 (no path found) after having traversed nodeA
	// and all of its neighbors
	return def
}

const createGraph = (edges) => {
	let graph = {}
	for (let pair of edges) addNodes(graph, pair[0], pair[1])
	return graph
}

const addNodes = (graph, val1, val2) => {
	if (graph[val1] == null) graph[val1] = []
	if (graph[val2] == null) graph[val2] = []
	graph[val1].push(val2)
	graph[val2].push(val1)
}

const edges = [
	['i', 'j'],
	['k', 'i'],
	['m', 'k'],
	['k', 'l'],
	['o', 'n'],
]

const edges2 = [
	['w', 'x'],
	['x', 'y'],
	['z', 'y'],
	['z', 'v'],
	['w', 'v'],
]

console.log(shortestPath(edges, 'i', 'm'))
console.log(shortestPath(edges2, 'w', 'z'))
