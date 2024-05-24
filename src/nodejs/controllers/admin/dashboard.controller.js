import sequelize from '../../config/db_connect.js'
import { PriceFormat } from '../../utils/norm.js';

const getPage = (req, res) => {
    res.render('admin/dashboard', 
    {
        layout: 'layouts/admin',
        title: 'Dashboard | MyPastry'
    });
}


const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const getTodaySales = async (req, res) => {
    
    const localTime = new Date();
    
    const date = {
        hours: localTime.getHours(),
        minutes: localTime.getMinutes(),
        day: localTime.getDate(),
        month: months[localTime.getMonth()]
    }
    
    console.log(date);

    const result = await sequelize.query(
        `
        select sum(total) 
        from "order"
        where date(created_at) = current_date;
        `,
        { type: sequelize.QueryTypes.SELECT });

        res.render('admin/total-sales', {
            layout: 'layouts/admin',
            title: 'Vendas | MyPastry',
            total: PriceFormat.format(result[0].sum),
            date: date,
        });
}

const getCharts = (req, res) => {
    res.render('admin/all-charts', 
    {
        layout: 'layouts/admin',
        title: 'Gráficos | MyPastry'
    });
}

export { getPage, getTodaySales, getCharts };