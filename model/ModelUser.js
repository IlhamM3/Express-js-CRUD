import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import database from "../configuration/DB.js";

const User = database.define('users', {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false 
    }
}, {
    freezeTableName: true 

});
User.beforeCreate(async (user) => {
    if (user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
});

export default User;

(async () => {
    await database.sync({alter: true});
    console.log('Tabel user berhasil dibuat');
})();