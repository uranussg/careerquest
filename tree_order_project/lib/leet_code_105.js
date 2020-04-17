// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if(preorder.length === 0) return null
    let rootVal = preorder[0]
    let root = new TreeNode(rootVal)
    let rootIdx = inorder.indexOf(rootVal)
    let leftpreorder = preorder.slice(1, rootIdx + 1)
    let rightpreorder = preorder.slice(rootIdx + 1)
    let leftinorder = inorder.slice(0, rootIdx)
    let rightinorder = inorder.slice(rootIdx + 1)
    root.left = buildTree(leftpreorder, leftinorder)
    root.right = buildTree(rightpreorder, rightinorder)
    return root
}
