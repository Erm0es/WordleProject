//a base of words for easy access to more words
let base =[
"spela",
"jobba",
"städa",
"målar",
"jogga",
"sover",
"cykla"
];

//the guessing word, split to read every letter
let guessing="hallå";
let guessingWord = guessing.toLowerCase().split("");

//takes a random word from the base and slits the word
let rightGuess = base[Math.floor(Math.random() * base.length)];
let wordBase = rightGuess.toLowerCase().split("");

console.log(wordBase);
console.log(guessingWord);

const holder = [];
const checkDubble = [];

function checkGuesses (){
    //an array with obj for output
    for(let i = 0; i < wordBase.length; i++){
        //checks position of letters is correct
        let position = wordBase.indexOf(guessingWord[i]);
        //for the different results
        if(guessingWord[i] === wordBase[i]){
            holder[i] = {letter: guessingWord[i], result: "correct"};
            checkDubble.push(guessingWord[i]);
        }else{
            holder[i] = {letter: guessingWord[i], result: "missplaced"};
        }
        if(position === -1){
            holder[i] = {letter: guessingWord[i], result: "incorrect"};
        }
       
    };  
    console.log(holder)
    console.log(checkDubble)
}
checkGuesses();

//if letter is doubble