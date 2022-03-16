import {base} from "./baseArr"
export function checkGuesses(input,wordBase){
    
    input = "hallå".toLowerCase().split("");
    wordBase = base[Math.floor(Math.random() * base.length)].toLowerCase().split("");
    let holder = [];

    for (let i = 0; i < 5; i++) {

        let position = wordBase.indexOf(input[i]);
       
        if (input[i] === wordBase[i]) {
            holder[i] = {letter: input[i], result: "correct"};
        } else {
            holder[i] = {letter: input[i], result: "misplaced"};
        }
        if (position === -1) {
            holder[i] = {letter: input[i], result: "incorrect"};
        }
        wordBase[position] = "";
        console.log(wordBase);
        console.log(holder);
    }
   return holder;
}



