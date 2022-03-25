import {checkGuesses} from "./script/checkGuesses.js";
import {base} from "./script/baseArr.js"

let input = "Hallå";
let wordBase = base[Math.floor(Math.random() * base.length)].split("");
checkGuesses(input,wordBase);

