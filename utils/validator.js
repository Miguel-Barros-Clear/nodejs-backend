module.exports = {
    user: (app, req, res) => {
        req.assert('name', 'O nome é obrigatório!').notEmpty();
        req.assert('email', 'O email está invalido!').notEmpty().isEmail();

        let err = req.validationErrors();

        if(err){
            app.utils.error.send(err, req, res);
            return false;
        }else{
            return true;
        }
    }
}