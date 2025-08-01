const express =require('express')
const router = express.Router();

const contactController = require('../controllers/contactController')

const id = 

router.get('/', contactController.getAll)
router.post('/', contactController.createContact)
router.get('/:id', contactController.findById)

module.exports = router