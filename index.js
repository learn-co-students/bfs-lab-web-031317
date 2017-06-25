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

function findAdjacent(address, vertices, edges){
  let adjacent = []
  edges.forEach( edge => {
    if (edge.includes(address)) {
      let desired = edge.filter( e => e !== address )[0]
      let adj = vertices.filter( vert => vert.name === desired && vert.distance === null )[0]
      if (adj) {
        adjacent.push(adj)
      }
    }
  })
  return adjacent
}

function markDistanceAndPredecessor(pred, adjacentNodes){
  adjacentNodes.forEach( adj => {
    adj.distance = pred.distance + 1
    adj.predecessor = pred
  })
  return adjacentNodes
}
