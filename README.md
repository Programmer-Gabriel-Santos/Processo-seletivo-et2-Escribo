<img src="https://github.com/Programmer-Gabriel-Santos/Processo-seletivo-et1-Escribo/blob/main/escribocom_logo.jpeg?raw=true" width="350" height="300" alt="Escribo Inovação para o Aprendizado">

 
# 2º Desafio técnico da Escribo


## Sobre

O desafio consiste uma API RESTful para autenticação de usuários, que permite operações de cadastro (sign up), autenticação (sign in) e recuperação de informações do usuário.

## Testes


<img src="https://github.com/Programmer-Gabriel-Santos/Processo-seletivo-et2-Escribo/blob/main/coverage.png?raw=true" width="900" height="250" alt="Resultado dos testes">



## Tecnologias

- JavaScript
- NodeJS
- Express
- Jest
- Knex
- bcrypt
- JWT
- MySQL
- POO

## Deploy

####  <li>AWS</li>

## Como testar?


 <a href="https://documenter.getpostman.com/view/21555755/2s9YeBfZQK" target="_blank">Documentação da API</a>


## Como rodar localmente?


Você precisa ter o Node.js instalado.

Faça o clone desse repositório inserindo em seu terminal o seguinte: git clone https://github.com/Programmer-Gabriel-Santos/Processo-seletivo-et2-Escribo.git

Entre na pasta do projeto: cd Processo-seletivo-et2-Escribo

Use o comando a seguir: npm ci

Para rodar os teste execute o comando: npm run test

Antes de iniciar a aplicação você precisa criar e preencher o arquivo .env da seguinte forma:

DB_HOST=seu-banco


DB_USER=seu-usuario


DB_PASSWORD=sua-senha


DB_DATABASE=seu-database


DB_PORT=porta


APP_PORT = 3003


JWT_KEY = sua-chave-aleatória


JWT_EXPIRES_IN = "30m"


BCRYPT_SALT_ROUNDS = 12

Para iniciar a aplicação no windows use o comando: npm run build-windows && npm run start


Para iniciar a aplicação no linux use o comando: npm run build-linux && npm run start



<br/>
<br/>
<br/>
