import { DataTypes } from "sequelize";
import database from "../configuration/DB.js";

const Todo = database.define('todos',{
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    deskripsi:{
        type:DataTypes.STRING,
        allowNull:true
    },
    deadline:{
        type:DataTypes.DATE,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default Todo;

(async () => {
    await database.sync({alter: true});
    console.log('Tabel todos berhasil dibuat');
})();