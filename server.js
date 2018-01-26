var express = require('express');
var app = express();
var PORT = 3000; //uppercase for costant

var middleware= {
    requireAuthentication: function (req, res, next){
        console.log('private route hit');
        next();   
    }, //route leve middleware
    logger: function (req, res, next) {
        //new Date().toString
        console.log(new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();       
    }
};

app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About Us');
});


app.use(express.static(__dirname + '\\public'));


app.listen(PORT, function () {
    console.log('Server Started on port ' + PORT);
});