// Roll-dice experiment



"use strict";

function runExperiment(sampleSize) {
    const valueCounts = [0, 0, 0, 0, 0, 0];

    for (let i = 0 ; i < sampleSize ; i++) {
        const dieRoll = Math.floor( Math.random() * 6 ) + 1;

        valueCounts[dieRoll - 1]++ ;
    };



const result = [];

for (let i = 0 ; i < valueCounts.length ; i++) {
    
    const percentage = (valueCounts[i] / sampleSize) * 100 ;
    const formattedPercentage = percentage.toFixed(2);
    result.push(formattedPercentage);
    
    return(result);
    };
};

function main () {
    const sampleSizes = [100, 1000 , 1000000];

    for (let i = 0 ; i < sampleSizes.length ; i++) {

        const sampleSize = sampleSizes[i];
        const result = runExperiment(sampleSize);
        console.log(result, sampleSize);
    };
};


main() ;