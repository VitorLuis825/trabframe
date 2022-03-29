const mysql = require('mysql') // importar sql
module.exports = mysql.createConnection({ // exporta a conexão retornada por mysql.createConnection()
	    	host: 'localhost', // url
	    	user: 'root', // usuario
	    	password: 'root', // senha de acesso
	    	database : 'portal_noticias' // nome da databse
	    }) // conexão com o banco de dados portal_noticias