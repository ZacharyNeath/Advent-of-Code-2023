const {readFile} = require("./../common.js");

let records = readFile("Day2/game-records.txt");

const maxBlue = 14;
const maxRed = 12;
const maxGreen = 13;

computeValidGames();
computeMinCubes();

function computeValidGames(){
    let gameValidity = records.map(element => {
        const [game, rounds] = element.split(": ");

        let numBlue = getColourMax(rounds, "blue");
        let numRed = getColourMax(rounds, "red");
        let numGreen = getColourMax(rounds, "green");

        let isValid = (maxBlue >= numBlue && maxRed >= numRed && maxGreen >= numGreen);
        
        return {gameNum : parseInt(game.split(" ")[1]),
                "valid" : isValid
            };

    });

    let validNum = gameValidity.reduce((total, game) => {
        return game.valid ? total + game.gameNum : total;
    }, 0);

    console.log("TOTAL: " + validNum);

}

function computeMinCubes(){
    let cubePowers = records.map(element => {
        const [game, rounds] = element.split(": ");

        let numBlue = getColourMax(rounds, "blue");
        let numRed = getColourMax(rounds, "red");
        let numGreen = getColourMax(rounds, "green");
        
        return numBlue * numRed * numGreen;

    });

    let sum = cubePowers.reduce((total, power) => total + power, 0);

    console.log("POWER SUM: " + sum);

}

function getColourMax(game, colour){
    const re = new RegExp(`\\d+(?=\\s${colour})`, 'g');
    let matches = game.match(re).map(x => parseInt(x));
    return Math.max(...matches);

}