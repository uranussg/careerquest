function breadthFirstArray(root) {
    if (!root.val) return []
    return [].concat([root.val], breadthFirstArray(root.left), breadthFirstArray(root.right))
}

module.exports = {
    breadthFirstArray
};