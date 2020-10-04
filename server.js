var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

//setting up express app to handle data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listen
app.listen(PORT, function(){
    console.log("app is listening on PORT: " + PORT);
});