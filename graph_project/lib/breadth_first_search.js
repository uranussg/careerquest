function breadthFirstSearch(startingNode, targetVal) {
    let queue = [startingNode]
    let visited = new Set()
    while (queue.length) {
        let node = queue.shift()
        if (node.val === targetVal) return true
        node.neighbors.forEach(el => {
            if (!visited.has(el)) {
                queue.push(el)
            }
        });
    }
    return false
}

module.exports = {
    breadthFirstSearch
};