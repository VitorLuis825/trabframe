let connection = require('../../config/dbConnection.js')

module.exports = function(app){

    //rota para a página de notícia
    app.get('/noticias',function(req,res){
	    
	// Fazer uma requisição das notícias para por na tela
	connection.query('select * from noticias', (error,result)=>{
		if(error) console.log(error) 
		res.render('noticias/noticias.ejs',{noticias:result}) // passa o segundo argumento lá pro .ejs, um objeto {noticias : [{id:1...},{id:2...},{...]}
	})

	//res.render('noticias/noticia.ejs');
});
}