import {checkGuesses} from "./checkGuesses.js";
import {base} from "../../server/baseArr.js"

let input = "Hallå";
let wordBase = base[Math.floor(Math.random() * base.length)].split("");
checkGuesses(input,wordBase);
