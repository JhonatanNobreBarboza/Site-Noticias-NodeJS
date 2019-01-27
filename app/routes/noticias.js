module.exports = function(aplication){
  

    aplication.get('/noticias', function(req,res){
        aplication.app.controllers.noticias.noticias(aplication, req, res)
    })

    aplication.get('/noticia', function(req,res){
        aplication.app.controllers.noticias.noticia(aplication, req, res)      
    })
}