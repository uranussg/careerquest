function inOrderArray(root) {
    if (!root.val) return []
    return inOrderArray(root.left).concat([root.val], inOrderArray(root.right))
}

function postOrderArray(root) {
    if(!root.val) return []
    return inOrderArray(root.left).concat(inOrderArray(root.right),[root.val])
}


module.exports = {
    inOrderArray,
    postOrderArray
};