module.exports = function(app){

    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'hodel',
        database : 'portal_noticias'

    });

    connection.query('select * from noticias', function(error, result){
            res.send(result);
    });

    app.get('/noticias', function(req, res){
        res.render("noticias/noticias");
    });
};