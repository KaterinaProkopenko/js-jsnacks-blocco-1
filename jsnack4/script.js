let names = ['Carlo', 'Marta', 'Alice', 'Mario', 'Carla', 'Anna', 'Lisa', 'Nina'];

let nameParty = prompt('Inserisci il tuo nome').toLowerCase().trim();

let nameUser = false;

for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase() == nameParty) {
        nameUser = true;
    }
}

if (nameUser == true) {
    console.log('Benvenuto!');
} else {
    console.log('Vai a casa!');
}
    