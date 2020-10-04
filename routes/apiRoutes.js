//connecting routes to data
var journalData = require("../data/journaldata");

module.exports = function (app) {

    //GET
    app.get("/api/journals", function (req, res) {
        res.json(journalData);
    });

    //POST
    app.post("/api/journals", function (req, res) {
        journalData.push(req.body);
        res.json("saved");
      });

    //DELETE
    app.dlete("/api/journals/:index", function(req, res) {
        var elem = parseINT(req.params.index);
        var tempJournal = [];
        for (var i=0; i < journalData.length; i++) {
            if (i !== elem) {
                tempJournal.push(journalData[i]);
            }
        }
        journalData = tempJournal;

        res.json("delete done");
    });
}