instalar sequelize-cli como dev dependecies
npm install --save-dev sequelize-cli

iniciar sequelize
npx sequelize-cli init

gerar migrations
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

criar db
npx sequelize-cli db:migrate
