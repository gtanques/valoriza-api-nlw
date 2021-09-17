# Valoriza
## API para gerar e enviar elogios
![Badge](https://img.shields.io/badge/TypeScript%20-blue)
![Badge](https://img.shields.io/badge/nodejs-14.17.6%20-green)
![Badge](https://img.shields.io/badge/PostgreSQL-blue)
![Badge](https://img.shields.io/badge/TypeORM-red)
![Badge](https://img.shields.io/badge/yarn-blue)
![Badge](https://img.shields.io/badge/jwt-black)
  
  
### [Configurações](https://github.com/gtanques/valoriza-api-nlw/blob/main/ormconfig.json):  
* Criar banco de dados  `CREATE DATABASE valoriza;`
* Instalar dependências `npm install`
* Gerar migrations      `yarn typeorm migration:run`
* rodar servidor        `yarn dev`

Roda em [`localhost:3000`](http://localhost:3000)

### Rotas
- [Criar usuário](http://localhost:3000/users)
- [Autenticar](http://localhost:3000/auth)
- [Listar elogios enviados](http://localhost:3000/users/compliments/send)
- [Listar elogios enviados](http://localhost:3000/users/compliments/receive)
- [Criar elogio](http://localhost:3000/tags)
- [Elogiar](http://localhost:3000/compliments)

