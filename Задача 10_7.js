let arr = [48, 55, 'text', 3, 36, 0, 17, 7, 10, null, 22, NaN, 9 ]
let odd = 0
let even = 0
let zero = 0
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'number' && !isNaN(arr[i])) {
    	if (arr[i] !==0) {	
          if (arr[i]%2 === 0) {
            odd++
          } else if (arr[i]%2 !== 0) {
            even++
          }
        } else if (arr[i] === 0) { zero++
        } 
    }
}
console.log(`Количество четных элементов - ${odd}, количество нечетных элементов - ${even}, ноль - ${zero}`) 