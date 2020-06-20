<h1 align="center">
🚀 App Empresas
</h1>

## Readme

Este documento orienta como utilizar a API AppEmpresas

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [PPostgreSQL](https://www.postgresql.org/)

## :gear: Instalação

1. Clonar o repositório com: `git clone [link do repositório]`;
2. Acesse a pasta do projeto;
3. Renomear o arquivo `.env.example` para `.env`;
4. Abrir o arquivo `.env` e configurar as variáveis de ambiente;
```
APP_URL=http://localhost:3333
NODE_ENV=development

# Auth

APP_SECRET=appempresas

# Database

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

```
5. Acesse a pasta do projeto pelo terminal e instale as dependências com `yarn`;

 ```bash
 yarn install
  ```
6. No terminal execute o comado abaixo para executar as migrations;

```bash
yarn sequelize db:migrate
```
7. No terminal execute o comando abaixo para executar os seeds;
```bash
yarn sequelize db:seed:all
```
8. Para iniciar o **Servidor** utilize o comando:
```bash
yarn dev
```

### Dados para Teste

- Servidor: https://localhost:3333/
- Versão da API: v1
- Usuário de Teste: testeapple@ioasys.com.br
- Senha de Teste : 12345678


