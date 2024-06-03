import sequilize from '../config/db_connect.js'
import { DataTypes } from 'sequelize'

const Location = sequilize.define('location', {
        id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        geom: {type: DataTypes.GEOMETRY('POINT', 4326)}
    },
    {
        tableName: 'location',
        timestamps: false
    }
)

export default Location;