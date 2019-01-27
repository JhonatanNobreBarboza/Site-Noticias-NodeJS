module.exports.formulario_inclusao_noticia = function(aplication, req, res){
    res.render("admin/form_add_noticia", {validacao : {}, noticia : {}})
}
module.exports.noticias_salvar = function(aplication, req, res){
    var noticia = req.body    
    req.assert('titulo','O titulo é obrigatório!').notEmpty()
    req.assert('resumo','O resumo é obrigatório!').notEmpty()
    req.assert('resumo','O resumo deve conter de 10 ä 100 caracteres!').len(10, 100)
    req.assert('autor','O nome do autor é obrigatório!').notEmpty()
    function isValidDate(value) {
        if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;
        
        const date = new Date(value);
        if (!date.getTime()) return false;
        return date.toISOString().slice(0, 10) === value;
        }
        
        req.assert('data_noticia').custom(isValidDate).withMessage('A data é inválida');
        
        
    req.assert('noticia','A noticia é obrigatório!').notEmpty()

    var erros = req.validationErrors()

    if(erros){
        res.render("admin/form_add_noticia", {validacao: erros, noticia : noticia})
        return
    }

    var connection = aplication.config.dbConnection()
    var noticiasModel = new aplication.app.models.NoticiasDAO(connection)

    noticiasModel.salvarNoticia(noticia, function(error, result){
        res.redirect('/noticias')
    })
}