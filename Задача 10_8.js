let mapCapital = new Map();
mapCapital.set('Россия', 'Москва');
mapCapital.set('Великобритания', 'Лондон');
mapCapital.set('Франция', 'Париж');
mapCapital.set('США', 'Вашингтон');
mapCapital.set('Италия', 'Рим');
for ([key, value] of mapCapital) {
console.log(`${key} — Х, ${value} — Y`);
}
