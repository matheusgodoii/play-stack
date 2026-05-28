const express = require('express');
const router = express.Router();
const QuadraController = require('../controllers/quadraController');

// Define os endpoints de quadras
router.post('/quadras', QuadraController.cadastrar);
router.get('/quadras', QuadraController.listar);

module.exports = router;