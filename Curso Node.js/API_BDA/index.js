const express = require('express')
const app = express()
const routes = require('./rotas_BDA/rotasUser')
const database = require('./modelo/conexao')
const porta = 3000;

app.use(express.json());
app.use(routes);

database.sync().then(
    app.listen(porta, function(){
            console.log('Api - rodando na porta', porta);
        }
    )
);