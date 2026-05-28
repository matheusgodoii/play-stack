const mysql = require('mysql2');
require('dotenv').config();

// Cria um pool de conexões usando as variáveis do arquivo .env
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Transforma o pool para suportar Promises (Async/Await), deixando o código limpo e moderno
const promisePool = pool.promise();

module.exports = promisePool;