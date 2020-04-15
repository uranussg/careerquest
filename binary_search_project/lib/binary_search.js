function binarySearch(array, target) {
    if (!array.length) return false
    let midIdx = Math.floor(array.length/2)
    if(array[midIdx] === target) return true
    if(array[midIdx] < target) {
        return binarySearch(array.slice(midIdx + 1), target)}
    else {
        return binarySearch(array.slice(0, midIdx), target)
    }
}

function binarySearchIndex(array, target) {
    if (!array.length) return -1
    let midIdx = Math.floor(array.length/2)
    if(array[midIdx] === target) return midIdx
    if(array[midIdx] < target) {
        let subIdx = binarySearch(array.slice(midIdx + 1), target)
        return subIdx === -1 ? -1 : subIdx + midIdx + 1}
    else {
        return binarySearch(array.slice(0, midIdx), target)
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};