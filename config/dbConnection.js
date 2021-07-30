var mysql = require('mysql');

module.exports = function(){
return  mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'hodel',
    database : 'portal_noticias'
    });
}