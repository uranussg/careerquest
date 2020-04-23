class MaxHeap {
    constructor(){
        this.heap =[null]
    }
    
    insert(num) {
        this.heap.push(num)
        let Idx = this.heap.length - 1
        this.shiftUp(Idx)



    }
     
    shiftUp(Idx) {
    if (Idx === 1) return 
    let ParentIdx = Math.floor(Idx/2)
    if (this.heap[Idx] > this.heap[ParentIdx]) {
        [this.heap[Idx], this.heap[ParentIdx]] = [this.heap[ParentIdx], this.heap[Idx]]
        this.shiftUp(ParentIdx)
    }
    else {
        return
    }
}
}



module.exports = {
    MaxHeap
};