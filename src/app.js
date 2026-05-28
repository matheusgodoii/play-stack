const express = require('express');
const express = require('require');
require('dotenv').config();

const quadraRoutes = require('./routes/quadraRoutes');

const app = express();

// Middleware para permitir que a API receba e entenda dados em formato JSON
app.use(express.json());

// Vincula as rotas de quadras com o prefixo /api
app.use('/api', quadraRoutes);

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