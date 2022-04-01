import express from "express";
import {engine} from "express-handlebars";

const PORT = process.env.PORT || 5080;
const app = express();

app.engine("handlebars", engine({
    helpers : {
        markdown: md => marked(md)
    },
}));

app.set("view engine", "handlebars");
app.set("views","./frame");

app.get("/", async (req,res) => {
   res.render("./partials/home");
});

app.get("/highscore", async (req, res) => {
    res.render("./partials/highscore");
});

app.get("/info",async (req,res) => {
    res.render("./partials/info")
});

app.use("/static", express.static("./styling/scss"));


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});


