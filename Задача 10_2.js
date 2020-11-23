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
