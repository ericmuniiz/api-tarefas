const express = require('express');
const router = express.Router();
const controller = require("../controllers/tarefas");

router.post('/adicionar-tarefa', controller.addTask);
router.get('/tarefas', controller.showTask);
router.get('/tarefa/:id', controller.showTaskById);
router.delete('/deletar-tarefa/:id', controller.deleteById);
router.put('/marcar-andamento/:id', controller.andamento);
router.put('/marcar-concluida/:id', controller.finishTask);

module.exports = router;