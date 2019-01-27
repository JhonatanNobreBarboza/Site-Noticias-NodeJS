var mysql = require('mysql');

var connMsSQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'root',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    return connMsSQL
}
