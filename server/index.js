import express from "express";
import {base} from "./baseArr.js";

const PORT = process.env.PORT || 5080;
const app = express();

//app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/", (req,res) => {
    res.json({message: "this should be react"});
});

app.get("/highscore", (req, res) => {
    res.json({ message: "Hello from server!"});
});

app.get("/info", (req,res) => {
    res.json({message: "Heres some info"});
});


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});


console.log(base);