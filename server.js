

const http = require("http");

const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://reja_db_user:DQbGG3AiaqZ2pbSS@cluster0.ftsipe8.mongodb.net/"
mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {    
        console.log("MongoDB connection succeded")
        module.exports = client;
        const app = require("./app");  
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running succesfully on port ${PORT}, http://localhost:${PORT}`);
        });

    }
});

