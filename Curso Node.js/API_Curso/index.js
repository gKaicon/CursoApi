//console.log('Teste Hello World, para ser exibido no terminal');

const express = require('express');
const app = express();
const routes = require('./rotas');

//usar o express
app.use(express.json());

//post - criação !
//.put - update
//patch - 
//delete - deletar
//get - buscar um dado, e exibir !
 

//rotas
app.use(routes);

/*
const resposta = {
    message: "mini c como objeto"
};
app.get('/Curso', function(req, res){
    //res.send('<h1>Olá aqui também na tag h1, do HTML <h1>');
    res.json(resposta);
});
*/

const porta = 3000;
app.listen(porta, function(){
    console.log('Api - rodando na porta 3000');
});