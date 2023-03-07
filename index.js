const express = require('http');

const app = express();

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>Hello World</h1>");
});

app.get("/users", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.json({
        users: "Miguel",
        email: "email@provider.com",
        id: 1
    });
});

app.listen(3000, "127.0.0.1", () => {
    console.log("Server is running");
})