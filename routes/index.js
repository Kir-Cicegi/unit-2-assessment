var express = require('express');
var router = express.Router();
const todosCtrl= require('../controllers/todos')

router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);
router.delete('/:id', todosCtrl.deleteToDo);

module.exports = router;
