const pg = require("pg");

const database = new pg.Client("postgres://gkizgfrt:B_nktAhIOLCFu4elyN2hu2EdbuWVk10r@babar.db.elephantsql.com/gkizgfrt");

database.connect((erro) => {
    if(erro) {
        return console.log("Não foi possível conectar ao banco" , erro)
    }else{
        return console.log("Conectado ao banco de dados ElephantSQL!");
    }
});

module.exports = database;
