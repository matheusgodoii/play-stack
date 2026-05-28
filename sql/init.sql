CREATE TABLE IF NOT EXISTS quadras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo_piso VARCHAR(50) NOT NULL,
    preco_hora DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quadra_id INT NOT NULL,
    usuario_nome VARCHAR(100) NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    status_pagamento ENUM('pendente', 'pago') DEFAULT 'pendente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (quadra_id) REFERENCES quadras(id) ON DELETE CASCADE,
    UNIQUE KEY unica_reserva_horario (quadra_id, data, horario)
);

CREATE TABLE IF NOT EXISTS lista_espera (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quadra_id INT NOT NULL,
    usuario_nome VARCHAR(100) NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (quadra_id) REFERENCES quadras(id) ON DELETE CASCADE
);