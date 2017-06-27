let bfs = (rootNode, vertices, edges) => {
  let nodeQueue = []
  nodeQueue.push(rootNode)
  while (nodeQueue.length > 0) {
    let currentNode = nodeQueue.shift()
    let adjacentNodes = findAdjacent(currentNode, vertices, edges)
    let visitedNodes = markDistanceAndPredecessor(currentNode, adjacentNodes)
    visitedNodes.forEach( visited =>  nodeQueue.push(visited) )
  }
  return vertices
}


let findAdjacent = (node, vertices, edges) => {
  let adjEdges = []
  let targetEdges = []

  edges.forEach( edge => {
    if ( edge.includes(node) ){
      targetEdges.push(edge)
    }
  }
)
let edgeNames = targetEdges.map( edge => {
  return edge[0] === node ? edge[1] : edge[0]
})

edgeNames.forEach( name => {
  vertices.forEach( vertex => {
    if (name === vertex.name && vertex.distance === null){
      adjEdges.push(vertex)
    }
  })
})
return adjEdges
}

let markDistanceAndPredecessor = (node, adjacentNodes) => {
  adjacentNodes.forEach( vertex => {
    // Object.assign( {}, vertex, { distance: 1, predecessor: node} )
    vertex.distance = vertex.distance + 1
    vertex.predecessor = node
  })
  return adjacentNodes
}
