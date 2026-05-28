const express = require('express');
require('dotenv').config();

const app = express();

// Middleware para permitir que a API receba e entenda dados em formato JSON
app.use(express.json());

// Rota de teste inicial para garantir que a API está viva
app.get('/api/status', (req, res) => {
    res.status(200).json({
        status: 'Online',
        message: 'API do Sistema de Reservas rodando com sucesso!',
        timestamp: new Date()
    });
});

// Configuração da porta através do .env (com fallback para a porta 3000)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});

module.exports = app;