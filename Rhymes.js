// ---------------------------------------------
        Cloudcover: Coding Round 2
// ---------------------------------------------

/*
 * The PROBLEM STATEMENT
 * 
 * Time Limit: 45min + 15min
 * 
 * We were working with rhyme schemes. To tell if the
 * two words rhyme, we have to compare their rhyme-
 * patterns. 
 * We need your help to write a program that can find
 * out the rhyme-pattern of any word.
 * 
 * Vowel
 * A vowel is any of: `a`, `e`, `i`, `o`, `u` or `y`.
 * NOTE: we consider `​y`​ as a vowel too, as long as
 * it is not at the start or end of a word. So, as an
 * example, the `y`​ in `rhythm`​ is considered a vowel
 * 
 * ​Rhyme-pattern​
 * A ​rhyme-pattern​ is a substring of a word such that:
 *   1. The word ends with that substring.
 *   2. The first letter of the substring is always a
 *       vowel.
 *   3. The substring contains exactly one contiguous
 *       string of vowel(s).
 *   4. The substring must either be the whole word,
 *       or the letter immediately preceding the
 *       start of the substring must be a non-vowel.
 * 
 * For example,
 *  the rhyme-pattern​ of `star` would be `ar`,
 *  the rhyme-pattern​ of `rainbow` would be `ow`,
 *  the rhyme-pattern​ of `noise` would be `e`, 
 *  the rhyme-pattern​ of `s​pying` would be `​ying​`, 
 *  and the rhyme-pattern​ of `​all​` would be `​all​`.
 * 
 * Input will:
 *  1. always be in lower case
 *  2. always have vowels
 *  3. have no other character than [a-z]
 * 
 * Task: you need to implement the function
 * `getRhymePattern` below to return the rhyme-pattern
 * as described.
 * 
 * [Bonus marks for good commenting, brevity, and modularity]
 */


/* USED STRATEGY

1. Find the indices of all the vovels in the word (including(if 'y' qualifies)). Store in an array.

2. Put this array (each pot. substring), through the set of rules described above. If found, return substring.

*/ 


// -------------------------------------------------------------------
        SOLUTION START
// -------------------------------------------------------------------


const GLOBAL_VOVELS = ['a','e','i','o','u'];

function getRhymePattern(word) {

  // get all indices of vovels
  let finalRhyme = '';
  const allVovelIndices = getVovelIndexes(word);

  // Itereate over the indices one by one to find the rhyme // word
  for(let i=0;i<allVovelIndices.length;i++){
     
    const potRhyme = word.substr(allVovelIndices[i]);
    
    // apply rhyme qualification rules on the substring, expect boolean
    const isRhyme = checkRhymeRules(potRhyme);
    if(isRhyme){
      finalRhyme = potRhyme;
      break;
    }
  }
  
  console.log(finalRhyme);
  return finalRhyme;

}

// This helper takes care of identifying the substrings starting with a vovel (inc of 'y' condition)
function getVovelIndexes (word) {
  const wordLen = word.length;
  const vovelIndexArr = [];

  for(let i=0;i<wordLen;i++) { 
    const workingVovArr = GLOBAL_VOVELS.slice();
    if(i!==0 && i!==(wordLen-1)){
      workingVovArr.push('y');
    }
    if(workingVovArr.includes(word[i])){
       vovelIndexArr.push(i);
    }
  }

  return vovelIndexArr;
}

// This helper checks for rules of rhymes in passed substrings
function checkRhymeRules (potRhyme) {
  const potStrLength = potRhyme.length;
  const workingVovelArr = GLOBAL_VOVELS.slice();
  workingVovelArr.push('y');
  let isRhyme = true;
  let breakDetected = false;
  for(let i=0;i<potStrLength;i++) {
    // keep checking until we find a non vovel after vovel(s)
    if(!workingVovelArr.includes(potRhyme[i])){
      breakDetected = true;
      continue;
    }
    // if after break is detected, again a new vovel is
    // detected, its non conting
    if(breakDetected && workingVovelArr.includes(potRhyme[i])){
      // exception for the 'y' in the end
      if(i===potStrLength-1 && potRhyme[i]=== 'y'){
        isRhyme = true;
      } else {
        isRhyme = false;
        break;
      }
    }
  }
  return isRhyme;
}


// -------------------------------------------------------------------
        SOLUTION END
// -------------------------------------------------------------------

// -------------------------------------------------------------------
        TEST CASES ( Evaluate all test cases to check correctness)
// -------------------------------------------------------------------

const TEST_CASES = [
  {
    "input": "problem",
    "output": "em"
  },
  {
    "input": "than",
    "output": "an"
  },
  {
    "input": "haiku",
    "output": "u"
  },
  {
    "input": "height",
    "output": "eight"
  },
  {
    "input": "weight",
    "output": "eight"
  },
  {
    "input": "doctor",
    "output": "or"
  },
  {
    "input": "pills",
    "output": "ills"
  },
  {
    "input": "ills",
    "output": "ills"
  },
  {
    "input": "every",
    "output": "ery"
  },
  {
    "input": "day",
    "output": "ay"
  },
  {
    "input": "night",
    "output": "ight"
  },
  {
    "input": "fight",
    "output": "ight"
  },
  {
    "input": "other",
    "output": "er"
  },
  {
    "input": "other",
    "output": "er"
  },
  {
    "input": "noise",
    "output": "e"
  },
  {
    "input": "boys",
    "output": "oys"
  },
  {
    "input": "true",
    "output": "ue"
  },
  {
    "input": "too",
    "output": "oo"
  },
  {
    "input": "letters",
    "output": "ers"
  },
  {
    "input": "scheme",
    "output": "e"
  },
  {
    "input": "alpha",
    "output": "a"
  },
  {
    "input": "blaster",
    "output": "er"
  },
  {
    "input": "cat",
    "output": "at"
  },
  {
    "input": "desert",
    "output": "ert"
  },
  {
    "input": "elephant",
    "output": "ant"
  },
  {
    "input": "frog",
    "output": "og"
  },
  {
    "input": "gulch",
    "output": "ulch"
  },
  {
    "input": "horse",
    "output": "e"
  },
  {
    "input": "ireland",
    "output": "and"
  },
  {
    "input": "jam",
    "output": "am"
  },
  {
    "input": "kreme",
    "output": "e"
  },
  {
    "input": "loofah",
    "output": "ah"
  },
  {
    "input": "moo",
    "output": "oo"
  },
  {
    "input": "narf",
    "output": "arf"
  },
  {
    "input": "old",
    "output": "old"
  },
  {
    "input": "pink",
    "output": "ink"
  },
  {
    "input": "quash",
    "output": "uash"
  },
  {
    "input": "rainbow",
    "output": "ow"
  },
  {
    "input": "star",
    "output": "ar"
  },
  {
    "input": "tour",
    "output": "our"
  },
  {
    "input": "uvula",
    "output": "a"
  },
  {
    "input": "very",
    "output": "ery"
  },
  {
    "input": "will",
    "output": "ill"
  },
  {
    "input": "xmas",
    "output": "as"
  },
  {
    "input": "young",
    "output": "oung"
  },
  {
    "input": "zed",
    "output": "ed"
  },
  {
    "input": "deception",
    "output": "ion"
  },
  {
    "input": "comic",
    "output": "ic"
  },
  {
    "input": "grout",
    "output": "out"
  },
  {
    "input": "oval",
    "output": "al"
  },
  {
    "input": "cable",
    "output": "e"
  },
  {
    "input": "rob",
    "output": "ob"
  },
  {
    "input": "steal",
    "output": "eal"
  },
  {
    "input": "steel",
    "output": "eel"
  },
  {
    "input": "weak",
    "output": "eak"
  },
  {
    "input": "poem",
    "output": "oem"
  },
  {
    "input": "lines",
    "output": "es"
  },
  {
    "input": "it",
    "output": "it"
  },
  {
    "input": "your",
    "output": "our"
  },
  {
    "input": "sour",
    "output": "our"
  },
  {
    "input": "fling",
    "output": "ing"
  },
  {
    "input": "flying",
    "output": "ying"
  },
  {
    "input": "yell",
    "output": "ell"
  },
  {
    "input": "hell",
    "output": "ell"
  },
  {
    "input": "sunny",
    "output": "unny"
  },
  {
    "input": "toney",
    "output": "ey"
  },
  {
    "input": "money",
    "output": "ey"
  },
  {
    "input": "bunn",
    "output": "unn"
  },
  {
    "input": "syzygy",
    "output": "ygy"
  },
  {
    "input": "yeasayer",
    "output": "ayer"
  },
  {
    "input": "layer",
    "output": "ayer"
  }
];
