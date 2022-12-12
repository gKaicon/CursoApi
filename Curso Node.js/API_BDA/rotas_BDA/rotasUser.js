const express = require('express')
const routers = express.Router()
const user = require('../modelo/user')

//create
routers.post('/criar', async function(req, res){
    const {nome, login, senha} = req.body
    const n1 = await user.create({nome, login, senha})
    res.status(201).json(n1)
})

//read
routers.get('/Ler', async function(req, res){
    const usuarios = await user.findAll({raw:true})
    res.status(200).json(usuarios)
})

//update
routers.put('/editar', async function(req, res){
    const {id, nome, login, senha} = req.body
    const updateUsuario = await user.update({nome, login, senha}, {where: {id: id}})
    res.status(200).json(updateUsuario)
})

routers.delete('/delete/:id', async function(req, res){
    const id = req.params.id
    await user.destroy({where: {id: id}})
    res.status(200).json({message : "Usuario " + id + " removido"})
})

module.exports = routers;