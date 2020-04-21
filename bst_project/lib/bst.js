class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
        this.root = null
        this.queue = []
        
    }

    add(val) {
        let node = this.root
        while (node) {
            if (node.val === val ) return null
            if (node.val > val){
                if (node.left) {
                node = node.left
                } 
                else {
                    let newnode = TreeNode(val)
                    node.left = newnode
                }            
            }
            else if (node.right){
                node = node.right
            }
            else {
                let newnode = TreeNode(val)
                node.right = newnode                
            }
        }
    }

}

module.exports = {
    TreeNode,
    BST
};