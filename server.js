console.log("Web serverni boshlash!");

const express = require('express');
const http = require("http")

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
app.get('/hello', function(req, res) {
    res.end(`<h1>Hello world!</h1>`);
});

app.get('/gift', function(req, res) {
    res.end(`<h1>Siz sovg'alar bo'limidasiz!</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running succesfully on port ${PORT}`);
})
