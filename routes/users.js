let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
})

module.exports = (app) => {
    app.get("/users", (req, res) => {
        db.find({}).sort({ name: 1 }).exec((err, users) => {
            if (errbody) {
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                })
            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json")
                res.json({
                    users
                });
            }
        })
    });

    app.post("/users", (req, res) => {
        db.insert(req.body, (err, user) => {
            if (err) {
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                })
            } else {
                console.log(req.body);
                res.status(200).json(user);
            }
        })
    })
};