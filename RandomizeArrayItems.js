console.log('<------------------ Start JS Test below!!! ------------------>')

/*
    Problem Statement: (Area Round2 Live)
    'dictionary' contains an object with various items (in this case names of animals).
    Simply pass the array of items to a function and make it appeat '-' separated, RANDOMIZED,
    each time it is run.
*/

function schuffleDisplay(animals = []) {
    const schArr = animals.sort(() => {
        const random = Math.floor(Math.random() * 3); /// 0,1,2
        if (random === 0) {
            return 0;
        } else if (random === 1) {
            return 1;
        } else {
            return -1;
        }
    });

    return schArr.join('-');
}

var dictionary = { 0: "dog", 1: "cat", 2: "pig", 3: "cow", 4: "tiger", 5: "horse" };

console.log(schuffleDisplay(Object.values(dictionary)));
