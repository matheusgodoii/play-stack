const db = require('../config/database');

const ListaEsperaModel = {
    // Insere o usuário na fila de espera para aquela quadra e horário específicos
    async entrarNaFila(quadra_id, usuario_nome, data, horario) {
        const query = 'INSERT INTO lista_espera (quadra_id, usuario_nome, data, horario) VALUES (?, ?, ?, ?)';
        const [resultado] = await db.execute(query, [quadra_id, usuario_nome, data, horario]);
        return { id: resultado.insertId, quadra_id, usuario_nome, data, horario };
    },

    // Consulta a fila de uma quadra específica em um dia/horário para ver quem é o próximo (fila FIFO - First In, First Out)
    async buscarFilaPorHorario(quadra_id, data, horario) {
        const query = 'SELECT * FROM lista_espera WHERE quadra_id = ? AND data = ? AND horario = ? ORDER BY criado_em ASC';
        const [linhas] = await db.execute(query, [quadra_id, data, horario]);
        return linhas;
    }
};

module.exports = ListaEsperaModel;