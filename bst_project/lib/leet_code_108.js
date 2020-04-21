// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    let rez = []
    let queue = [nums]
    while (queue){
        let arr = queue.shift()
        if (arr.length > 1) {
            let midIdx = Math.floor(arr.length / 2)
            rez.push(arr[midIdx])
            queue.push(arr.slice(0, midIdx))
            queue.push(arr.silce(midIdx + 1))

        }
        else if (arr.length){
            rez.push(arr[0])
        }
        else {
            rez.push(null)
        }
    }
}

nums = [-10,-3,0,5,9]
console.log(sortedArrayToBST(nums))