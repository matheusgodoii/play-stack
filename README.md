# PlayStack - Sistema Inteligente de Gestão e Reserva de Quadras

> **Projeto Integrador VII | Engenharia de Software - UNIFIO**

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## 📌 Sobre o Projeto
Este repositório contém o desenvolvimento do **Backend (API RESTful)** para um sistema web voltado à gestão e reserva de quadras esportivas. O objetivo principal do software é otimizar o inventário de horários das arenas, mitigando a ociosidade financeira e eliminando falhas operacionais (como o *double booking*) através de uma arquitetura centralizada e uma Lista de Espera Inteligente.

---

## 🚀 Tecnologias e Arquitetura

O projeto foi construído focado em alta performance, escalabilidade e manutenibilidade, adotando as seguintes tecnologias e padrões:

* **Linguagem / Ambiente:** JavaScript / Node.js
* **Framework Web:** Express.js
* **Banco de Dados:** MySQL (Relacional)
* **Infraestrutura:** Docker & Docker Compose (Isolamento de ambiente)
* **Padrões de Projeto e Engenharia:** * Aplicação de **Princípios SOLID** para desacoplamento de regras de negócio.
  * Modelagem baseada em **UML** (Diagramas de Sequência e Classes).

> 📄 **Nota Técnica:** Os artefatos de modelagem UML que guiaram a arquitetura deste código encontram-se disponíveis na pasta `/docs` deste repositório.

---

## ⚙️ Funcionalidades Principais

A API expõe as seguintes regras de negócio validadas:

1. **Cadastro Dinâmico de Quadras:** Registro de ativos físicos, tipos de piso e parametrização de preços.
2. **Motor de Reservas (Self-Service):** Algoritmo de validação de concorrência com transações seguras (ACID) para evitar reservas simultâneas no mesmo horário físico.
3. **Lista de Espera Inteligente:** Fila de prioridade cronológica que atua automaticamente sobre horários lotados, mitigando vacância em caso de cancelamentos.
4. **Registro de Pagamento:** Fluxo de proteção de caixa (cobrança de sinais).

---

## 🛠️ Como Executar o Projeto Localmente

Siga as instruções abaixo para rodar o backend e o banco de dados no ambiente do Codespaces ou máquina local.

### Pré-requisitos
* [Node.js](https://nodejs.org/en/) (v18 ou superior)
* [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado e rodando

### Passo a Passo

1. **Instale as dependências do Node:**
   npm install

2. **Inicie o contêiner do Banco de Dados (MySQL):**
    docker-compose up -d

3. **Inicie o servidor da API:**
    npm run dev