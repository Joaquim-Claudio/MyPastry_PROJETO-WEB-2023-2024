import sequilize from '../config/db_connect.js'
import { DataTypes } from 'sequelize'
import Client from './client.model.js'

const MobileOrder = sequilize.define('mobile_order', {
        id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        status: {type: DataTypes.ENUM('pending', 'preparing', 'delivering', 'completed')},
        cli_id: {type: DataTypes.INTEGER, references:{model: 'client', key: 'id'}},
        total: {type: DataTypes.REAL},
        created_at: {type: DataTypes.DATE},
        finished_at: {type: DataTypes.DATE},
        display_id: {type: DataTypes.TEXT}
    },
    {
        tableName: 'mobile_order',
        timestamps: false,
    },
)


export default MobileOrder;