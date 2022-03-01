const numbers = [];
let sum = 0;

for (let i = 0; i < 10; i++) {
    let numberRandom = Math.floor(Math.random () * 50);
    numbers.push(numberRandom);
    sum += sum + numberRandom;
}

console.log(numbers);
console.log(sum);
console.log(sum / numbers.length);