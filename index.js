function findAdjacent(node, vertices, edges){
  let adjEdges = []
  let targetEdges = []

  edges.forEach( edge => {
    if ( edge.includes(node) ){
      targetEdges.push(edge)
    }
  })
  let finalEdges = targetEdges.map( edge => {
   return node === edge[0] ? edge[1] : edge[0]
  })
  finalEdges.forEach( name => {
    vertices.forEach( vertex => {
      if (name === vertex.name && vertex.distance == null){
        adjEdges.push(vertex)
      }
    })
  })
  return adjEdges
}

function markDistanceAndPredecessor(pred, adjacentNodes){
  adjacentNodes.forEach( adj => {
    adj.distance = pred.distance + 1
    adj.predecessor = pred
  })
  return adjacentNodes
}

function bfs(rootNode, vertices, edges){
   let queue = []
   queue.push(rootNode)
   while (queue.length !== 0) {
     let node = queue.shift()
     let adj = findAdjacent(node, vertices, edges)
     markDistanceAndPredecessor(node, adj).forEach( marked =>
     {queue.push(marked)})
   }
   return vertices
 }
