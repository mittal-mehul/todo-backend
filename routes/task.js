const express = require('express')
const router = express.Router()

const taskCtrl = require('../controllers/task')

router.get('/show', taskCtrl.getTasks)
router.post('/create', taskCtrl.createTask)
router.post('/edit', taskCtrl.editTask)
router.post('/delete', taskCtrl.deleteTask)

module.exports = router