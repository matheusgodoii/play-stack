const db = require('../config/database');

const QuadraModel = {
    // Insere uma nova quadra no banco
    async criar(nome, tipo_piso, preco_hora) {
        const query = 'INSERT INTO quadras (nome, tipo_piso, preco_hora) VALUES (?, ?, ?)';
        const [resultado] = await db.execute(query, [nome, tipo_piso, preco_hora]);
        return { id: resultado.insertId, nome, tipo_piso, preco_hora };
    },

    // Lista todas as quadras cadastradas
    async listarTodas() {
        const query = 'SELECT * FROM quadras';
        const [linhas] = await db.execute(query);
        return linhas;
    }
};

module.exports = QuadraModel;