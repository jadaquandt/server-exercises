const express = require('express')
const app = express()
const port = 3000;

let count = 0;

app.get("/", function (req, res, next) {
    res.send("Count = " + count);  
})

app.post("/add", function (req, res, next) {
    count += 1;
    res.send("Count now: " + count);
})

app.post("/subtract", function (req, res, next) {
    count -= 1;
    res.send("Count now: " + count);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))