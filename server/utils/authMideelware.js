const authMiddelware = (req,res, next) =>{
    if( req.session.login){
        res.send({login: req.session.login})
    }else{
        res.status(401).send({message: 'nierozpoznano'})
    }
}

module.exports = authMiddelware;