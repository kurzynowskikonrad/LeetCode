const largestComponent = (graph) => {
	let largest = new Set()
	let visited = new Set()
	for (let node in graph) {
		let component = explore(graph, node.toString(), new Set(), visited)
		if (component.size > largest.size) largest = component
	}
	return largest
}

const explore = (graph, node, component, visited) => {
	if (visited.has(node.toString())) return false
	visited.add(node.toString())
	component.add(node.toString())
	for (let neighbor of graph[node]) {
		explore(graph, neighbor.toString(), component, visited)
	}
	return component
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

console.log(largestComponent(graph))
console.log(largestComponent(graph2))
console.log(largestComponent(graph3))
console.log(largestComponent(graph4))
console.log(largestComponent(graph5))
