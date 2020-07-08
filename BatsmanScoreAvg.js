/*
    Problem Statement: (Icertis Prelim Test)
    'recordString' contains the vag scores of a batsman agaonst respective countries. 
    Find the country with against whom his average is maximum. Additionally find the max avg score also.
    Avg is total score against a country/ Total matches against the country.

    Achieve complexity less than O(n^2), prefreably O(n) / O(nlog(n))

    Run this script in Browser by inputing a dummy HTML file with a script tag.
*/


const findMaxAvgCountry = (recordString = "") => {
    if (!recordString.trim()) {
        return 'Invalid String';
    }
    const parsedRecords = JSON.parse(recordString);
    if (parsedRecords.length === 0) {
        return 'No Record Present';
    }
    const recordAnalysis = {};

    // O(1) for destructuring as access
    let maxAvgRecord = [...parsedRecords[0]];

    // O(n) for linear iteration
    for (const eachRecord of parsedRecords) {
        // O(1) for destructuring as access
        const [country, score] = eachRecord;
        // O(1) for access 
        const existingRecord = recordAnalysis[country];
        let newAvg = 0;

        if (existingRecord) {
            // O(1) for destructuring as access
            const [totalScore, matchCount] = existingRecord;
            const newTotScore = totalScore + score;
            const newMatchCount = matchCount + 1;
            newAvg = (newTotScore / newMatchCount);
            // O(1) insertion
            recordAnalysis[country] = [newTotScore, newMatchCount, newAvg];
        } else {
            // O(1) insertion
            newAvg = score;
            recordAnalysis[country] = [score, 1, newAvg];
        }

        // O(1) for access
        if (newAvg > maxAvgRecord[1]) {
            maxAvgRecord = [country, newAvg];
        } else if (newAvg === maxAvgRecord[1] && country !== maxAvgRecord[0]) {
            maxAvgRecord = [maxAvgRecord[0] + '/' + country, newAvg];
        }
    }

    return maxAvgRecord;
}

// Input type string
const recordString = `[
    ["Pakistan", 23],
    ["Pakistan", 2],
    ["India", 32],
    ["India", 71],
    ["Australia", 31],
    ["India", 22],
    ["Pakistan", 81],
    ["Pakistan", 23],
    ["Pakistan", 97],
    ["India", 232],
    ["Australia", 71],
    ["Australia", 31],
    ["India", 22],
    ["Pakistan", 0],
    ["Pakistan", 23],
    ["Pakistan", 127],
    ["India", 120],
    ["India", 71],
    ["Australia", 31],
    ["India", 22],
    ["Australia", 81]
]`;

const res = findMaxAvgCountry(recordString);

console.log(res);
