export const checkGuesses = () => {
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
let input = guessing.toLowerCase().split("");

let wordBase = base[Math.floor(Math.random() * base.length)].toLowerCase().split("");

const holder = [];

function output (){
    for(let i = 0; i < 5; i++){

        let position = wordBase.indexOf(input[i]);
        
        if(input[i] === wordBase[i]){
            holder[i] = {letter: input[i], result: "correct"};
        }else{
            holder[i] = {letter: input[i], result: "misplaced"};
        }
        if(position === -1){
            holder[i] = {letter: input[i], result: "incorrect"};
        }
        wordBase[position] = "";
    };  
}
output();
}
export default checkGuesses;



