/* Fundamentals 1 */
const country = "India";
const continent = "Asia";
let population = 22; // in millions

console.log(country, continent, population);

const isISland = false;
const language = "hindi";

console.log(typeof isISland, typeof population, typeof country, typeof language);

console.log(`half population : ${population / 2}`)
// console.log('increased population by 1', ++population);
console.log(`finland Population is 6 million. Your country population is ${population < 6 ? "lesser" : "more"} than finland`)
console.log(`The average population of a country is 33 million people. Your country have ${population > 33 ? "more" : "less"} people than the avarage country!`)
let description = (`${country} is in ${continent}, and its ${population} people speak ${language}.`);

console.log('9' - '5', '19' - '13' + '17', '19' - '13' + 17, 23 < 57, 5 + 6 + '4' + 9 - 4 - 2);

// let numNeighbours = prompt('How many neighbour countries does your country have?')
// console.log(`${Number(numNeighbours) === 1 ? "Only 1 Border!" : "more than 1 border"}`);

let sarahChoice = (language === 'english' && population <= 50 && isISland === false) ? `You Should live in ${country}` : `${country} does not match your criteria :('`
console.log(sarahChoice);

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST numdsdber of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}