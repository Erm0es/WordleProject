import fetch from "node-fetch";

export const base = [];

fetch("https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json")
.then(data => {
    return data.json();
    
})
    .then(word => {
        function getWord (){
        const words = Object.keys(word).filter((word) => word.length <= 6)
        const push = base.push(words)
        
        }
        return getWord(push);
    });

  