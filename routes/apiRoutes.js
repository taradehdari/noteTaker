//connecting routes to data
var data = require("../data/data");

console.log("data: ", data);

module.exports = function (app) {

    //GET
    app.get("/api/notes", function (req, res) {
        res.json(data);
        console.log("data in app.get(/api/journals): ", data);
    });

    //POST
    app.post("/api/notes", function (req, res) {
        data.push(req.body);
        console.log("data in app.post(/api/journals): ", data);
        res.json("saved");
      });

    //DELETE
    app.delete("/api/notes/:index", function(req, res) {
        var elem = parseINT(req.params.index);
        var tempJournal = [];
        for (var i=0; i < data.length; i++) {
            if (i !== elem) {
                tempJournal.push(data[i]);
            }
        }
        data = tempJournal;

        res.json("delete done");
    });
}