let express = require("express")
let routes = express.Router();

routes.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.json({
        users: [{
            name: "Miguel",
            email: "email@provider.com",
            id: 1
        }]
    });
});

module.exports = routes;