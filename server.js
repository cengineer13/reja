console.log("Web serverni boshlash!");

const express = require('express');
const http = require("http")
const fs = require("fs")


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
    console.log(req);
})

app.get("/author", (req, res) => {
    res.render("author", {user: user})
});
app.get('/', function(req, res) {
    res.render("harid");
}) 
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running succesfully on port ${PORT}`);
})
