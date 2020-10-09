var path = require("path");

module.exports = function(app) {
    //GET
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    //link to css file
    app.get("/styles", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assts/css/styles.css"));
    });

    //goes to home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};