/*
    Problem Statement: (Secureworks Dell Round 2)
    Need to print an output like :
    *
   ***
  *****
 *******
  *****
   ***
    *
    'n'here will be 4. 
    Achieve this.
    Run this script in Browser by inputing a dummy HTML file with a script tag.
*/

const PrintStars = (n = 1) => {
  if(typeof n !== 'number' || n < 1) {
    return;
  }
  n = parseInt(n,10);
  const arrLen = n + (n - 1);
  let counterOfStars = 1;
  mode = 'inc';
  for (let i = 0; i < arrLen; i++) {
    const noOfSpBA = (arrLen - counterOfStars) / 2;
    const starSpace = (new Array(noOfSpBA).fill(' ')).concat(new Array(counterOfStars).fill('*'));

    console.log(starSpace.join(''))

    if (counterOfStars === arrLen) {
      mode = 'dec';
      counterOfStars = counterOfStars - 2;
    } else if (mode === 'inc') {
      counterOfStars = counterOfStars + 2;
    } else {
      counterOfStars = counterOfStars - 2;
    }

  }
}

PrintStars(5)
