import sequelize from '../../config/db_connect.js'


const countByAge = async (req, res) => {
    const result = await sequelize.query(
    `
    select extract ('year' from age(c.b_date)) as age 
    from client as c
    order by age;
    `,
    { type: sequelize.QueryTypes.SELECT });
    res.send(result);
}

const getDailySales = async (req, res) => {
    const result = await sequelize.query(
    `
    select date(created_at), sum(total) 
    from "order"
    where created_at > current_date - 15
    group by date(created_at)
    order by date(created_at);
    `,
    { type: sequelize.QueryTypes.SELECT });
    res.send(result);
}

export { countByAge, getDailySales };