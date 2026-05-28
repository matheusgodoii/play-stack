const express = require('express');
const router = express.Router();
const ListaEsperaController = require('../controllers/listaEsperaController');

router.post('/lista-espera', ListaEsperaController.adicionarAosEspera);
router.get('/lista-espera', ListaEsperaController.verFila);

module.exports = router;