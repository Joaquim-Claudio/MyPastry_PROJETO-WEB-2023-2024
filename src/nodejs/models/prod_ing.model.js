import sequelize from '../config/db_connect.js'
import { DataTypes } from 'sequelize'
import Product from './product.model.js';
import Ingredient from './ingredient.model.js';

const Prod_Ing = sequelize.define('prod_ing', {
        pro_id: {
            type: DataTypes.INTEGER,
            references: Product,
            key: 'id',
        },
        ing_id: {
            type: DataTypes.INTEGER,
            references: Ingredient,
            key: 'id',
        },
    },
    {
        tableName: 'prod_ing',
        timestamps: false,
    }
)

Product.belongsToMany(Ingredient, {
    through: Prod_Ing,
    foreignKey: 'pro_id',
    uniqueKey: false,
})

Ingredient.belongsToMany(Product, {
    through: Prod_Ing,
    foreignKey: 'ing_id',
    uniqueKey: false,
})

export default Prod_Ing;