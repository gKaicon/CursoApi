const {Sequelize} = require('sequelize')

const conexao = new Sequelize(
    'mini_curso',
    'root',
    '12345',
    {host: 'localhost', dialect: 'mysql'}
);

module.exports = conexao;