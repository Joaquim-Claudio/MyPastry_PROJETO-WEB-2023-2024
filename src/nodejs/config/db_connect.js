import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.SRC,
})

export default db;