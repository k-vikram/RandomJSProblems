/*
    Problem Statement: (Cars24 Second Round)
    Make a memoised function for fetching user Cibil Score.
    Function should take the userId/emplID as input and make call only when needed otherwise pick up from a cache.
    Implement using JS.
*/

// Optimized Cibil Fetch or Memoized Cibil fetch
const optimizedCibilFetch = () => {
  const memoedCibils = new Map(); // {}

  return async (emplId, cacheBust = false) => {
    if (!emplId) {
      return null;
    }

    if (memoedCibils.has(emplId) && !cacheBust) {
      return memoedCibils.get(emplId);
    } else {
      // make the call
      let cibilScore = null;
      try {
        response = await fetch();
        cibilScore = response.JSON();
        memoedCibils.set(emplId, cibilScore);
      } catch (exp) {
        console.err('Some error occured');
      } finally {
        return cibilScore;
      }
    }
  };
};

// Usage

const getCibilScoreForEmpl = optimizedCibilFetch(); // pass true if need to by-pass memo and rehydrate
const emplCibilScore = getCibilScoreForEmpl(1234); // or any id
const emplCibilScore = getCibilScoreForEmpl(1234, true); // cache bust
