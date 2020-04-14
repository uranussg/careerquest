function merge(array1, array2) {
    let rez = []
    while (array1 && array2) {
        if (array1[0] <= array2[0]) {
            rez.push(array1.unshift())
        }
        else {
            rez.push(array2.unshift())
        }
    }
    return rez.concat(array1, array2)
}

function mergeSort(array) {
    if (array.length < 2) return array
    let mid = Math.floor(array.length)
    let left = array.slice(0, mid)
    let right = array.slice(mid)
    let sortedLeft = mergeSort(left)
    let sortedright = mergeSort(right)
    return merge(sortedLeft, sortedright)
}

module.exports = {
    merge,
    mergeSort
};