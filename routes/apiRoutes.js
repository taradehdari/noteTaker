//connecting routes to data
var data = require("../data/data");

module.exports = function (app) {

    //GET
    app.get("/api/journals", function (req, res) {
        res.json(data);
    });

    //POST
    app.post("/api/journals", function (req, res) {
        data.push(req.body);
        res.json("saved");
      });

    //DELETE
    app.delete("/api/journals/:index", function(req, res) {
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