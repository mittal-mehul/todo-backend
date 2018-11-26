const express = require('express')
const router = express.Router()

const taskCtrl = require('../controllers/task')

router.get('/test', (req, res) => res.send('Working Fine!'))
router.post('/create', taskCtrl.createTask)
router.post('/edit', taskCtrl.editTask)

module.exports = router