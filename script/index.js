import {checkGuesses} from "./checkGuesses";
import {base} from "./baseArr"

let input = "Hallå";
let wordBase = base[Math.floor(Math.random() * base.length)].split("");
checkGuesses(input,wordBase);