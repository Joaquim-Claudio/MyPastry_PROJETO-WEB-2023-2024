import sequelize from '../config/db_connect.js';
import {DataTypes} from 'sequelize';

const Client = sequelize.define('client', {
        id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        name: {type: DataTypes.TEXT, allowNull:false},
        email: {type: DataTypes.TEXT},
        passhash: {type: DataTypes.TEXT},
        gender: {type: DataTypes.CHAR},
        b_date: {type: DataTypes.DATEONLY},
        admin: {type:DataTypes.BOOLEAN, defaultValue:false},
        google_id: {type: DataTypes.TEXT, defaultValue:null}
    },
    {
        tableName:'client',
        timestamps:false
    }
)

export default Client;