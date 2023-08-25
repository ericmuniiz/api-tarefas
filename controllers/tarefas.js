const tarefas = require("../models/tarefas");

const database = require("../config/database");

//FUNÇÃO QUE CRIA TAREFA
exports.addTask = (req, res) => {
    const query = "INSERT INTO TAREFAS (id, status, descricao) values ($1, $2, $3);"
    const values = [
        req.body.id,
        req.body.status,
        req.body.descricao
    ]

    database.query(query, values).then(
        () => {
            res.status(200).send({ mensagem: "Tarefa adicionada com sucesso!" })
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
}

// FUNÇÃO PARA VER AS TAREFAS
exports.showTask = (req, res) => {
    const query = "SELECT * FROM TAREFAS";

    database.query(query).then(
        (resultado) => {
            res.status(200).send({ mensagem: resultado.rows })
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
}

// FUNÇÃO PARA VER AS TAREFAS
exports.showTaskById = (req, res) => {
    const query = "SELECT * FROM TAREFAS WHERE id=$1;"
    const values = [req.params.id];

    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({ mensagem: resultado.rows })
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
}

// FUNÇÃO PARA DELETAR AS TAREFAS
exports.deleteById = (req, res) => {
    const query = "DELETE FROM TAREFAS WHERE id=$1;"
    const values = [req.params.id];

    database.query(query, values).then(
        () => {
            res.status(200).json({ mensagem: "Tarefa removida com sucesso!" })
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
}

// FUNÇÃO PARA MARCAR EM ANDAMENTO AS TAREFAS
exports.andamento = (req, res) => {
    const query = "UPDATE TAREFAS set status = 'Andamento' WHERE id = $1; "
    const values = [req.params.id]

    database.query(query, values).then(
        () => {
            res.status(200).send({ mensagem: "Tarefa atualizada!" })
        },
        (erro) => {
            res.status(500).send({ erro: erro });
        }
    )
}

// FUNÇÃO PARA MARCAR TAREFAS CONCLUÍDAS
exports.finishTask = (req, res) => {
    const query = "UPDATE TAREFAS set status = 'Concluída' WHERE id = $1; "
    const values = [req.params.id]

    database.query(query, values).then(
        () => {
            res.status(200).send({ mensagem: "Tarefa concluída!" })
        },
        (erro) => {
            res.status(500).send({ erro: erro });
        }
    )
}

