let arr = [48, 48, 48, 48, 48, 12, 48, 48, 48, 48, 48, 48, 48 ]
let newArr = new Set(arr)
if (newArr.size == 1) {
console.log(true)
} else console.log(false)