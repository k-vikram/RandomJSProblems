console.log('<------------------ Start JS Test below!!! ------------------>')
/*
    Problem Statement: (Dell Prelim Test)
    'recordString' contains the Heads or tails sequence of coins. 0 is Head; 1 is Tails,
    Find out min. no of flips required to achieve the an alternating sequence of HTHTH or THTHT
    and deternmine the minimum no of flips required to reach the same(the one which needs lesser flips)

*/


const invertCoins = (arr = []) => {

      // Write your code here
      const noOfCoins = arr.length;

      if (noOfCoins === 0) {
          return 'No of coins is 0';
      }
  
      let HTHFace = false, THTFace = true, totalHTHFlip = 0, totalTHTFlip = 0;
  
      for (let i = 0; i < noOfCoins; i++) {
          if (arr[i] !== Number(HTHFace)) {
              totalHTHFlip++
          }  
          if (arr[i] !== Number(THTFace)) {
              totalTHTFlip++;
          }
          HTHFace = !HTHFace;
          THTFace = !THTFace;
      }
  
      let minFlipsNeeded = 0;
  
      if (totalHTHFlip > totalTHTFlip) {
          minFlipsNeeded = totalTHTFlip;
      } else if (totalHTHFlip < totalTHTFlip) {
          minFlipsNeeded = totalHTHFlip;
      } else if (totalHTHFlip === totalTHTFlip) {
          if (totalHTHFlip !== 0) {
              minFlipsNeeded = totalHTHFlip;
          }
      }
  
      return minFlipsNeeded;
}

// Input type string
const recordString = [1, 0, 1, 0, 1, 1, 1, 1, 1];

const res = invertCoins(recordString);

console.log(res);
