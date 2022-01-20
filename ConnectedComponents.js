// takes in an adjanceny list of an undirected graph and
// returns number of connected components in the graph

const connectedComponents = (graph) => {
	let visited = new Set()
	let components = 0
	for (let node in graph) {
		if (explore(graph, node.toString(), visited) == true) components++
	}
	return components
}

const explore = (graph, node, visited) => {
	if (visited.has(node)) return false
	visited.add(node)
	for (let neighbor of graph[node]) {
		explore(graph, neighbor.toString(), visited)
	}
	return true
}

const graph = {
	0: [8, 1, 5],
	1: [0],
	5: [0, 8],
	8: [0, 5],
	2: [3, 4],
	3: [2, 4],
	4: [3, 2],
}

const graph2 = {
	1: [2],
	2: [1, 8],
	6: [7],
	9: [8],
	7: [6, 8],
	8: [9, 7, 2],
}

const graph3 = {
	3: [],
	4: [6],
	6: [4, 5, 7, 8],
	8: [6],
	7: [6],
	5: [6],
	1: [2],
	2: [1],
}

const graph4 = {}

const graph5 = {
	0: [4, 7],
	1: [],
	2: [],
	3: [6],
	4: [0],
	6: [3],
	7: [0],
	8: [],
}

console.log(connectedComponents(graph))
console.log(connectedComponents(graph2))
console.log(connectedComponents(graph3))
console.log(connectedComponents(graph4))
console.log(connectedComponents(graph5))
