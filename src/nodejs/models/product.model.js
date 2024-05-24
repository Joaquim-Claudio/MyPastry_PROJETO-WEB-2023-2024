import sequelize from '../config/db_connect.js';
import {DataTypes} from 'sequelize';

const Product = sequelize.define('product', {
        id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        img_url: {type: DataTypes.TEXT},
        name: {type: DataTypes.TEXT, allowNull:false},
        description: {type: DataTypes.TEXT},
        category: {type: DataTypes.ENUM('pastel', 'hamburger', 'complement', 'beverage', 'dessert'), allowNull:false},
        delicacy: {type: DataTypes.BOOLEAN},
        available: {type: DataTypes.BOOLEAN},
        price: {type: DataTypes.REAL},
        price_in_points: {type: DataTypes.INTEGER},
    },
    {
        tableName:'product',
        timestamps:false,
    }
)

export default Product;