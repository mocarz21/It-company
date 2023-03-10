 const User = require('../models/user.model');
 const bcrypt =require('bcryptjs');

exports.register = async (req, res) => {
    try{
        const{login, password} = req.body
        if(login && typeof login ==='string' && password && typeof password  ==='string'){
            
            const userWithLogin = await User.findOne({login});
            if(userWithLogin){
               return res.status(409).send({mesage: 'User with this login alredy exists'});
            }
        const user = await User.create({login, password: await bcrypt.hash(password,10)});
        res.status(201).send({message: 'user created ' + user.login});
        }else{
            res.status(400).send({message: 'Bad request'})
        }
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.login = async (req, res) => {

    try{
        const {login, password} = req.body
        if(login && typeof login === 'string' && password && typeof password ==='string' ){
            const user = await User.findOne({login})
            if(!user){
                req.status(400).send('login and password is incorect')   
                }else{
                    if(bcrypt.compareSync(password, user.password)){
                        req.session.login = user.login
                        res.status(200).send({message: 'Login successful'})

                }else{
                    res.status(400).send('login and password is incorect')
                }
            }
        }
    }catch(err){
        res.status(500).send({message: err.message})
    }

}

exports.getUser = async (req,res) =>{
res.send('I,m logged')
}

exports.logout = async (req,res) => {
    req.session.destroy()
}