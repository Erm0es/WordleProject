import express from "express";

const PORT = process.env.PORT || 5080;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});

