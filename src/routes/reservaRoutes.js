const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/reservaController');

// Endpoints para gerenciar fluxo de agendamentos
router.post('/reservas', ReservaController.efetuarReserva);
router.patch('/reservas/:id/pagamento', ReservaController.confirmarPagamento);

module.exports = router;