const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require("https");

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/account", (req, res, next) => {
    const account = req.body;
    console.log(account.address);
    res.status(201).json({
        message: "account added!"
    });
})

app.use("/account", (req, res, next) => {
    const accounts = [
        {
            accountName: "Thu Nguyen",
            email: "thucelano@gmail.com",
            address: "Dallas",
            phone: "469-975-xxxx",
            password: "UyenMup"
        }
    ]
    res.status(200).json({
        message: 'Account fetched successfully!',
        posts: accounts
    })

})



const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=32a493f008c6421b255d91b5cbc139b7&language=en-US&page=10"
https.get(url, function (response) {
    response.on("data", function (data) {
        const moviesData = JSON.parse(data);
        const moviesJson = moviesData.results;
        app.use("/movies", (req, res, next) => {
            res.status(200).json({
                message: 'success',
                posts: moviesJson
            });
        });
    });
});

module.exports = app;