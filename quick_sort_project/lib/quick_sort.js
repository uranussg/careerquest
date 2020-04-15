function quickSort(array) {
    if(array.length < 2) return array
    let pivot = array[0]
    let left = array.filter(el => el < pivot)
    let right = array.filter(el => el >= pivot)
    let sortedLeft = quickSort(left)
    let sortedRight = quickSort(right)
    return sortedLeft.concat([pivot], sortedRight)
}


module.exports = {
    quickSort
};