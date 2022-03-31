import {checkGuesses} from "./checkGuesses.js";
import {base} from "./baseArr.js"

let input = "Hallå";
let wordBase = base[Math.floor(Math.random() * base.length)].split("");
checkGuesses(input,wordBase);
