import sequilize from '../config/db_connect.js'
import { DataTypes } from 'sequelize'
import Client from './client.model.js'
import MobileOrder from './mobile_order.model.js'
import Location from './location.model.js'

const ActiveClient = sequilize.define('active_client', {
        cli_id: {type: DataTypes.INTEGER, primaryKey:true, references:{model: 'client', key: 'id'}},
        ord_id: {type: DataTypes.INTEGER, references:{model: 'mobile_order', key: 'id'}},
        loc_id: {type: DataTypes.INTEGER, references:{model: 'location', key: 'id'}}
    },
    {
        tableName: 'active_client',
        timestamps: false
    }
)

export default ActiveClient;