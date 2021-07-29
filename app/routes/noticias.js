module.exports = function(app){

    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'hodel',
        database : 'portal_noticias'

    });

    app.get('/noticias', function(req, res){
        res.render("noticias/noticias");
    });
};