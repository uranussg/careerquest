// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        if (!this.head) {
            this.head = new Node(val)
            return this.head
        }
        let node = this.head
        while (node.next) {
            node = node.next
        }

        let newTail = new Node(val)
        node.next = newTail
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head || !this.head.next) {
            this.head = null
            return null
        }
        let node = this.head
        while (node.next.next) {
            node = node.next
        }

        node.next = null

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node(val)
        newHead.next = this.head
        this.head = newHead
        return this.head
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.head) {
            return null
        }
        this.head = this.head.next
        return this.head
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head
        while (node) {
            if (node.val = target) {
                return true
            }
            else {
                node = node.next
            }
        }
        return false
    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
