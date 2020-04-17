function treeHeight(root, height = 0) {
    if (!root.val) return height
    else {
        return Math.max(treeHeight(root.left, height + 1), treeHeight(root.right, height + 1))
    }
}


module.exports = {
    treeHeight
};