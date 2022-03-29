const mysql = require('mysql') // importar sql
module.exports = mysql.createConnection({
	    	host: 'localhost',
	    	user: 'root',
	    	password: 'ifms',
	    	database : 'portal_noticias'
	    }) // conexão com o banco de dados portal_noticias