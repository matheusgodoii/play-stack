const ListaEsperaModel = require('../models/listaEsperaModel');

const ListaEsperaController = {
    async adicionarAosEspera(req, res) {
        try {
            const { quadra_id, usuario_nome, data, horario } = req.body;

            if (!quadra_id || !usuario_nome || !data || !horario) {
                return res.status(400).json({ error: 'Todos os campos (quadra_id, usuario_nome, data, horario) são obrigatórios.' });
            }

            const novaEspera = await ListaEsperaModel.entrarNaFila(quadra_id, usuario_nome, data, horario);
            
            return res.status(201).json({
                message: 'Você foi inserido na Lista de Espera com sucesso! Se este horário vagar, você será notificado seguindo a ordem de prioridade.',
                registro: novaEspera
            });
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno ao entrar na lista de espera.', detalhes: error.message });
        }
    },

    async verFila(req, res) {
        try {
            const { quadra_id, data, horario } = req.query;

            if (!quadra_id || !data || !horario) {
                return res.status(400).json({ error: 'Os parâmetros de busca (quadra_id, data, horario) devem ser passados na URL.' });
            }

            const fila = await ListaEsperaModel.buscarFilaPorHorario(quadra_id, data, horario);
            return res.status(200).json({ quantidade_em_espera: fila.length, fila });
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno ao buscar a fila de espera.', detalhes: error.message });
        }
    }
};

module.exports = ListaEsperaController;