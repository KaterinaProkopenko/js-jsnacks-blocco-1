let numbers = [];

for (let i = 0; i < 6; i++) {
    let numberUser = parseInt(prompt('Inserisci il tuo numero'));
    if ((numberUser % 2 != 0) && (!isNaN(numberUser))) {
        numbers.push(numberUser);
    }
}

console.log(numbers);

