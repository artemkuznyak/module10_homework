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
