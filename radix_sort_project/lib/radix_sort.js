function radixSort(arr) {
    let maxDigit = getMaxDigit(arr)
    for (let i = 0; i < maxDigit; i++) {
        let buckets = Array.from( {length: 10}, () => [])
        arr.forEach(num => {
            let digit = getDigit(num, i)
            buckets[digit].push(num)
        })
        arr = [].concat(...buckets)
    }

    return arr

}

function getDigit(num, n) {
    return Math.floor(num/(10 ** n)) % 10
}

function digitNum(num) {
    if(num < 10) return 1
    let pow = 1
    while (Math.floor(num/(10 ** pow))) {
        pow += 1
    }

    return pow
}

function getMaxDigit(array) {
    let max = 0
    array.forEach(num => {
        let digit = digitNum(num)
        if (max < digit) max = digit
    });
    return max
}

module.exports = {
    radixSort
};