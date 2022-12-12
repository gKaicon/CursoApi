const express = require('express');
const routers = express.Router();

routers.get('/rota', function(req, res){
    res.json({message: "Rota de nome rota"});
});
module.exports = routers;