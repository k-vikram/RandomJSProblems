/* Problem Statement (Airmeet Round 1)- 
Given an array of 'n' elements as below containing numbers, find out upon subtraction of any 2 numbers yeild the 'stdResult'
output. Print out the unique pairs and length of such pairs.
  Points to Note:
  - The difference of the numbers can be positive or negative but is to be considered positive. 
    Ex. if stdResult is 2 and even if the diffenece is -2, it should be considered as 2 only.
  - The operands pair for subtraction is supposed to be unique and considered only once. 
    i.e. If 1,3 is validated then 3,1 at same indices should not be considered.
*/

var A  = [1,6,3,4,4,124,123,3,7,9,52,14,35,1,-21,-2001];

const stdResult = 2;

// recursive
var answer = (function iterate(Arr) {
  let retVal = [];
  for(var i=1;i<Arr.length;i++){
      if(Math.abs(Arr[0] - Arr[i]) === stdResult){
        retVal.push({first: Arr[0], second: Arr[i], Arr});
        // break;
      }
  }
  return (Arr.length === 2) ? retVal : [...iterate(Arr.slice(1)),...retVal];
}(A));

console.log(answer);
