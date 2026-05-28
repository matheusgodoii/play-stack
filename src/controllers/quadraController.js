const QuadraModel = require('../models/quadraModel');

const QuadraController = {
    // Método para cadastrar quadra
    async cadastrar(req, res) {
        try {
            const { nome, tipo_piso, preco_hora } = req.body;

            // Validação simples de dados obrigatórios
            if (!nome || !tipo_piso || !preco_hora) {
                return res.status(400).json({ error: 'Todos os campos (nome, tipo_piso, preco_hora) são obrigatórios.' });
            }

            const novaQuadra = await QuadraModel.criar(nome, tipo_piso, preco_hora);
            return res.status(201).json({ message: 'Quadra cadastrada com sucesso!', quadra: novaQuadra });
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno ao cadastrar quadra.', detalhes: error.message });
        }
    },

    // Método para listar todas as quadras
    async listar(req, res) {
        try {
            const quadras = await QuadraModel.listarTodas();
            return res.status(200).json(quadras);
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno ao buscar quadras.', detalhes: error.message });
        }
    }
};

module.exports = QuadraController;