import mongoose from "mongoose";

const highscoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: () => Date.now()
    },
    updatedAt:{
        type: Date,
        default: () => Date.now()
    },
    guesses: Number,
    wordLength: Number,
    wordType: String   
})

export default mongoose.model("Highscore", highscoreSchema)
