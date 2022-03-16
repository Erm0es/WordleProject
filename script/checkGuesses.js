export function checkGuesses(input,wordBase){

    let guess = input.split("");
    let holder = [];
    
    for (let i = 0; i < wordBase.length; i++) {

        let position = wordBase.indexOf(guess[i]);

        if (guess[i] === wordBase[i]) {
            holder[i] = {letter: guess[i], result: "correct"};
        } else {
            holder[i] = {letter: guess[i], result: "misplaced"};
        }
        if (position === -1) {
            holder[i] = {letter: guess[i], result: "incorrect"};
        }
        wordBase[position] = "";
        
        console.log(wordBase);
        console.log(holder);
    }
   return holder;
}



