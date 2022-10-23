# Projeto To Do list - Node.js
Repositório dos desafios da trilha node.js, capacitação feita pelo trabalho conjunto da DiProj e Sapatin da Orc'estra Gamificação

## Acessando o projeto

O projeto ja teve o deploy executado no heroku </br>
Se deseja utiliza-lo acesse o link: </br></br>
http://morbeck-tdl.herokuapp.com
## Executando o projeto localmente
1. Verifique se os seguintes encontram-se instalados em sua máquina:
  - Node.js (versão 16)
  - Git

2. No Terminal:
- Clone o repositório utilizando o comando
  ```bash
  git clone https://github.com/uMorbeck/orc-trilha-node
  ```
- Navegue para o diretório orc-trilha-node
  ```bash
  cd orc-trilha-node
  ```
- Instale os módulos localmente com o comando
  ```bash
  npm install
  ```
3. Prepare as variáveis de ambiente no arquivo .env.example
- Renomeie o arquivo para .env
- Coloque as variáveis de ambiente referentes à porta e o uri do banco de dados que será utilizado, o banco de dados deve ser MongoDB
  exemplo:
  ```bash
  PORT=3000
  DB_URI=mongo+srv://<user>:<password>@...
  ```
4. Para finalizar
- Execute o comando
  ```bash
  npm start
  ```
  Siga para o acesso local, com a porta selecionada no arquivo .env. <br />
  O link também estará disponível no terminal.