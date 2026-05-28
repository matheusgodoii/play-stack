const db = require('../config/database');

const ReservaModel = {
    // Verifica se já existe um agendamento para aquela quadra, data e horário específicos
    async verificarDisponibilidade(quadra_id, data, horario) {
        const query = 'SELECT * FROM reservas WHERE quadra_id = ? AND data = ? AND horario = ?';
        const [linhas] = await db.execute(query, [quadra_id, data, horario]);
        return linhas.length > 0 ? linhas[0] : null;
    },

    // Cria a reserva caso o horário esteja disponível
    async criar(quadra_id, usuario_nome, data, horario) {
        const query = 'INSERT INTO reservas (quadra_id, usuario_nome, data, horario, status_pagamento) VALUES (?, ?, ?, ?, "pendente")';
        const [resultado] = await db.execute(query, [quadra_id, usuario_nome, data, horario]);
        return { id: resultado.insertId, quadra_id, usuario_nome, data, horario, status_pagamento: 'pendente' };
    },

    // Confirma o pagamento (proteção de caixa / sinal financeiro)
    async atualizarPagamento(id, status) {
        const query = 'UPDATE reservas SET status_pagamento = ? WHERE id = ?';
        const [resultado] = await db.execute(query, [status, id]);
        return resultado.affectedRows > 0;
    }
};

module.exports = ReservaModel;