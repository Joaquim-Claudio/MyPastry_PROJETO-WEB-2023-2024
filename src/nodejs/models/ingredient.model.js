import sequelize from '../config/db_connect.js'
import { DataTypes } from 'sequelize'

const Ingredient = sequelize.define('ingredient' , {
        id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        img_url: {type: DataTypes.TEXT},
        name: {type: DataTypes.TEXT},
        available: {type: DataTypes.BOOLEAN},
    },
    {
        tableName: 'ingredient',
        timestamps: false,
    }
)

export default Ingredient;