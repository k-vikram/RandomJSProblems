console.log('<------------------ Start JS Test below!!! ------------------>')
/*
    Problem Statement: (Dell Prelim Test)
    'recordString' contains the Heads or tails sequence of coins. 0 is Head; 1is Tails,
    Find out min. no of flips required to achieve the desired sequence of HTHTH (or THTHT)
    Here we're doing HTHTH.

*/


const invertCoins = (recordString = []) => {

    const noOfCoins = recordString.length;

    if (!(recordString instanceof Array) || noOfCoins === 0 ) {
        return 'Invalid Input';
    }

    // set 'currentFace' = 'false' for HTHTH ; 'currentFace' = 'true' for THTHT..
    let currentFace = false,  totalFlipsNeeded = 0;

    const properSequence = [];

    //O(n) complexity
    for (let i = 0; i < noOfCoins; i++) {
        const requiredFace = Number(currentFace);
        if (recordString[i] !== requiredFace) {
            totalFlipsNeeded++;
        }
        properSequence.push(requiredFace);
        currentFace = !currentFace;
    }

    return totalFlipsNeeded;
}

// Input type string
const recordString = [0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1];

const res = invertCoins(recordString);

console.log(res);
