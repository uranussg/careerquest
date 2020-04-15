function countingSort(arr, max) {
    let counts = new Array(max + 1).fill(0)
    arr.forEach(num => {
        counts[num] += 1
    });
    let newArr = []
    counts.forEach((count, num) => {
        for( let i = 0; i < count; i++) {
            newArr.push(num)
        }
    })
    return newArr
}


module.exports = {
    countingSort
};