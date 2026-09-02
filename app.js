console.log("Web app serverni boshlash!");

const express = require('express');
const fs = require("fs")

// Database dan user ma'lumotlarini olish
let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
})
// Expressdan object olish
app = express();

// MongoDB chaqirish
// db MongoDb instance classdan olingan obyekt instanta
const db = require('./server').db("Reja"); 


// 1 Input code
app.use(express.static("public")); //Static fayllar joylashgan papka any browser can see
app.use(express.json()); // tashqaridan kelgan input datani Js pbyektga aylantirish
app.use(express.urlencoded({extended: true})); // html formdan qabul qilingan datani qabul qilib expressga mos obyektga aylantiradi

// 2 Session code
// 3 Views code  BSSR  - Backend server side rendering
app.set('views', 'views');
app.set('view engine', 'ejs')

// 4 Routing code

app.post('/create-item', (req, res) => {
    console.log("User entered /create-item")
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong!");
        }
        else {
            res.end("Succesfully added!");
        }
    });
    res.end("Success!");
});

app.get("/author", (req, res) => {
    res.render("author", {user: user})
});
app.get('/', function(req, res) {
    console.log("User entered/")
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("Something went wrong");
        }
        else {
            res.render("reja", {items: data});
        }
    })
    // res.render("reja");
}) 

module.exports = app;
