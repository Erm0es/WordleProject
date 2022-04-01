import mongoose from "mongoose"
import Highscore from "./Highscore.js"

mongoose.connect("mongodb+srv://EmelieWiberg:kandudet@cluster0.dx1nc.mongodb.net/Highscore?retryWrites=true&w=majority", () => 
console.log("connected"))

run()
async function run() {
const higscore = await Highscore.create({ name: "Emelie", guesses: 200, wordLength: 5, wordType: "repeat"})
console.log(higscore)
};