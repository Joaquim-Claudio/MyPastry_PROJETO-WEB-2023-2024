import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize('postgres://mypastry:Rgt2cuZLknZjBzxDPacD3OCsOZOGgfEb@dpg-cpehsntds78s73f30o5g-a.frankfurt-postgres.render.com/mypastry', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {}
})

export default db;