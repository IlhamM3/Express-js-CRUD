import {Sequelize} from "sequelize";

const database = new Sequelize('example','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default database ;