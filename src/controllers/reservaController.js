const ReservaModel = require('../models/reservaModel');

const ReservaController = {
    async efetuarReserva(req, res) {
        try {
            const { quadra_id, usuario_nome, data, horario } = req.body;

            // Validação de campos obrigatórios
            if (!quadra_id || !usuario_nome || !data || !horario) {
                return res.status(400).json({ error: 'Todos os campos (quadra_id, usuario_nome, data, horario) são obrigatórios.' });
            }

            // Regra de Negócio: Verificar se o horário já está tomado
            const reservaExistente = await ReservaModel.verificarDisponibilidade(quadra_id, data, horario);

            if (reservaExistente) {
                return res.status(409).json({
                    error: 'Horário indisponível para esta quadra.',
                    message: 'Este horário já foi reservado. Deseja entrar na Lista de Espera?',
                    sugestao_rota: '/api/lista-espera'
                });
            }

            // Se estiver livre, cria o agendamento
            const novaReserva = await ReservaModel.criar(quadra_id, usuario_nome, data, horario);
            return res.status(201).json({ message: 'Reserva pré-agendada com sucesso! Aguardando pagamento do sinal.', reserva: novaReserva });

        } catch (error) {
            return res.status(500).json({ error: 'Erro interno ao processar a reserva.', detalhes: error.message });
        }
    },

    async confirmarPagamento(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            if (!status || status !== 'pago') {
                return res.status(400).json({ error: "O status enviado deve ser obrigatoriamente 'pago'." });
            }

            const sucesso = await ReservaModel.atualizarPagamento(id, status);

            if (!sucesso) {
                return res.status(404).json({ error: 'Reserva não encontrada para atualização.' });
            }

            return res.status(200).json({ message: 'Pagamento confirmado com sucesso! Reserva garantida.' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno ao processar o pagamento.', detalhes: error.message });
        }
    }
};

module.exports = ReservaController;