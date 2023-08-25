const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const tarefasRoutes = require('./routes/tarefas')

const app = express();

app.use(bodyParser.json());

app.use('/', tarefasRoutes);

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
});
