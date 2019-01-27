module.exports.noticias = function(aplication, req, res){
    var connection = aplication.config.dbConnection()
        var noticiasModel = new aplication.app.models.NoticiasDAO(connection)

        noticiasModel.getNoticias(function(error, result){
            res.render('noticias/noticias', {noticias : result})
        })
}
module.exports.noticia = function(aplication, req, res){
    var connection = aplication.config.dbConnection()
        var noticiasModel = new aplication.app.models.NoticiasDAO(connection)

        var id_noticia = req.query
        
        noticiasModel.getNoticia(id_noticia, function(error, result){
            res.render('noticias/noticia', {noticia : result})
        })  
}