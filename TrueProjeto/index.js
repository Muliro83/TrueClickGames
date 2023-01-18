const express = require('express');
const server = express();
const path = require('path');
const Login = require('./js/login');

(async() =>{
    const database = require('./db');
    const Perfil = require('./js/perfil');
    const Register = require('./js/perfil');
        
    try{
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Perfil.create({
            nome: 'Vitor',
            sobrenome: 'Emanuel',
            telefone: 'bairro teste',
            rua: 'rua teste',
            cep: '1234567',
            estado: 'PB',
            email: 'vitoremanuelxs753@gmail.com',
            pais: 'BRASIL',
            login: 'Vitor',
            senha: 'FON',
            bairro: 'Bairro'
        })

         
                const resultadoCreateLogin = await Login.create({
                    password: '12345678',
                    username: 'Vitor'
                })
        
        
                const resultadoCreateRegister = await Register.create({
                    password: '12345678',
                    email: 'vitoremanuelxs753@gmail.com',
                    username: 'Vitor'
                })
        

        console.log(resultadoCreate);
        console.log(resultadoCreateLogin);
        console.log(resultadoCreateRegister);

    } catch(error){
        console.log(error);
    }
})();


server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/perfil.html'));   
})

server.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/index.html'));
})

server.get('/Games', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/Games.html'));
})

server.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/register.html'));
})

server.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/login.html'));
})


server.listen(3000)