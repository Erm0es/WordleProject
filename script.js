//a base of words for easy access to more words
let base =[
"spela",
"jobba",
"städa",
"målar",
"jogga",
"sover",
"slita"
];

let guessing="hallå";
let guessingWord = guessing.toLowerCase().split("");

let rightGuess = base[Math.floor(Math.random() * base.length)];
let wordBase = rightGuess.toLowerCase().split("");

console.log(wordBase);
console.log(guessingWord);

const holder = [];

function checkGuesses (){
    for(let i = 0; i < 5; i++){

        let position = wordBase.indexOf(guessingWord[i]);
        
        if(guessingWord[i] === wordBase[i]){
            holder[i] = {letter: guessingWord[i], result: "correct"};
        }else{
            holder[i] = {letter: guessingWord[i], result: "missplaced"};
        }
        if(position === -1){
            holder[i] = {letter: guessingWord[i], result: "incorrect"};
        }
        wordBase[position] = "";
        
       
    };  
    console.log(holder)
}
checkGuesses();
