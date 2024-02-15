function mergeSort (array) {

    if (array.length <= 1) {
        return array
    }

    const halfIndex = Math.floor(array.length / 2)
    const leftArray = array.slice(0, halfIndex)
    const rightArray = array.slice(halfIndex)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(left, right) {
    const result = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
        result.push(left.shift())
        }
        else {
        result.push(right.shift())
        }

    }

    
    return [...result, ...left, ...right]
}

arr = [4, 1, 5, 2, 6, 3, 7, 8]

console.log(mergeSort(arr))