function depthFirstSearch(root, targetVal) {
    if (!root.val) return false
    if (root.val === targetVal) return true
    return depthFirstSearch(root.left, targetVal) || depthFirstSearch(root.right, targetVal)
}


module.exports = {
    depthFirstSearch
};