// Задача 10.1

let value = +prompt("Введите значение")
console.log(value)
if (typeof value === "number" && !isNaN(value)) {
  if (value%2 === 0) {
    console.log("Четное")  
  } else if (value%2 !== 0) {
    console.log("Нечетное")
  }
 } else {
  console.log("Упс, кажется, вы ошиблись")
}

// Задача 10.2

let x = 5
console.log(typeof x)
switch (typeof x) {
  case 'number':
  console.log('Число');
    break;
  case 'string':
    console.log('Строка');  
    break;
  case 'boolean':
    console.log('Логический тип');  
    break;  
  default:
    console.log('Тип Х не определен');
}

// Задача 10.3

let str = 'Hello';
let strReverse = str.split('').reverse().join('');
console.log(strReverse)

// Задача 10.4

let value = Math.round(Math.random()*101)

// Задача 10.5

let arr = [2, 5, 7, 9, 17, 20, 34, 48, 72]; 
console.log(arr.length)
arr.forEach(function(item,i, arr) {
console.log(item)
})

// Задача 10.6

let arr = [48, 48, 48, 48, 48, 12, 48, 48, 48, 48, 48, 48, 48 ]
let newArr = new Set(arr)
if (newArr.size == 1) {
console.log(true)
} else console.log(false)

// Задача 10.7

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

// Задача 10.8

let mapCapital = new Map();
mapCapital.set('Россия', 'Москва');
mapCapital.set('Великобритания', 'Лондон');
mapCapital.set('Франция', 'Париж');
mapCapital.set('США', 'Вашингтон');
mapCapital.set('Италия', 'Рим');
for ([key, value] of mapCapital) {
console.log(`${key} — Х, ${value} — Y`);
}
