function maxValue(node, visited=new Set()) {
    visited.add(node)
    return Math.max(node.val, ...node.neighbors.map(neighbor => {
        if (!visited.has(neighbor)) return maxValue(neighbor, visited)
    }))
}

module.exports = {
    maxValue
};