let userNumbers = prompt('Inserisci 7 numeri');

let sum = 0;

for (let i = 0; i < userNumbers.length; i++) {
    sum += parseInt(userNumbers.charAt(i));
}

console.log(sum);
