// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
    if (!root) return true
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(height(root.left) - height(root.right)) < 2
}


function height(root, h = 0) {
    if (!root) return -1
    return Math.max(root.left, root.right) +1
}