import fetch from "node-fetch";

export const base = [];

fetch("https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json")
.then(data => {
    return data.json();
})
    .then(word => {
        for(let i = 0; i < word.length; i++) {
            if (word[i] == 5) {
                const push = base.push(word)
                console.log(base);
            } else {
                console.log("BUU")
            }
        }
    });
 

    