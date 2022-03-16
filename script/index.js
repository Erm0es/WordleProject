import {checkGuesses} from "./checkGuesses";
import {base} from "./baseArr"

let input = "Hallå".toLowerCase();
let wordBase = base[Math.floor(Math.random() * base.length)].toLowerCase().split("");
checkGuesses();