const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        },{
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

for (let i = 0; i < game.suspects.length; i++ ){
    let name = game.suspects[i].name;
    let color = game.suspects[i].color;
    console.log(`index is ${i}`);
    console.log(`${name}'s color is ${color}`);
}

console.log('---------------------');

function printSuspect(suspect, index, suspects){
    console.log(`index is ${index}`);
    console.log(`${suspect.name}'s color is ${suspect.color}`);
}

game.suspects.forEach(printSuspect);

console.log('---------------------');

game.suspects.forEach((suspect, index) => {
    console.log(`index is ${index}`);
    console.log(`${suspect.name}'s color is ${suspect.color}`);
})
