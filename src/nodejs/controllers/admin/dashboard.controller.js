import sequelize from '../../config/db_connect.js'
import { PriceFormat, TimeFormat } from '../../utils/norm.js';

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];


const getPage = (req, res) => {
    res.render('admin/dashboard', 
    {
        layout: 'layouts/admin',
        title: 'Dashboard | MyPastry'
    });
}


const getTodaySales = async (req, res) => {

    const localTime = new Date();
    const date = {
        hours: TimeFormat.format(localTime.getHours()),
        minutes: TimeFormat.format(localTime.getMinutes()), //localTime.getMinutes(),
        day: localTime.getDate(),
        month: months[localTime.getMonth()]
    }

    const result = await sequelize.query(`
        select sum(total) 
        from "order"
        where date(created_at) = current_date;
        `,
        { type: sequelize.QueryTypes.SELECT }
    );

    res.render('admin/total-sales', {
        layout: 'layouts/admin',
        title: 'Vendas | MyPastry',
        total: PriceFormat.format(result[0].sum),
        date: date,
    });
}

const getMediumPrice = async (req, res) => {

    const localTime = new Date();
    const date = {
        hours: TimeFormat.format(localTime.getHours()),
        minutes: TimeFormat.format(localTime.getMinutes()), //localTime.getMinutes(),
        day: localTime.getDate(),
        month: months[localTime.getMonth()]
    }
    
    const result = await sequelize.query('select avg(price) from product;',
        { type: sequelize.QueryTypes.SELECT }
    );

    res.render('admin/medium-price', {
        layout: 'layouts/admin',
        title: 'Preço médio | MyPastry',
        total: PriceFormat.format(result[0].avg),
        date: date
    });

}

const getMediumOrderVolume = async (req, res) => {
    const localTime = new Date();
    const date = {
        hours: TimeFormat.format(localTime.getHours()),
        minutes: TimeFormat.format(localTime.getMinutes()), //localTime.getMinutes(),
        day: localTime.getDate(),
        month: months[localTime.getMonth()]
    }

    const result = await sequelize.query(`
        select created_at::timestamp::date as date, count(*)
        from "order"
        where extract('hour' from created_at) = extract('hour' from current_timestamp)+1
        group by created_at::timestamp::date;
        `,
        { type: sequelize.QueryTypes.SELECT }
    );

    let total=0;
    for(let row of result) total += parseInt(row.count);
    let avg = total/result.length;

    res.render('admin/medium-order-volume', {
        layout: 'layouts/admin',
        title: 'Volume médio de pedidos | MyPastry',
        avg: PriceFormat.format(avg),
        date: date
    });
}

const getOrdersTable = (req, res) => {
    res.render('admin/all-orders', {
        layout:'layouts/admin',
        title: 'Tabelas | MyPastry'
    })
}

const getCharts = (req, res) => {
    res.render('admin/all-charts', 
    {
        layout: 'layouts/admin',
        title: 'Gráficos | MyPastry'
    });
}

const getMap = (req, res) => {
    res.render('admin/map', {
        layout: 'layouts/admin',
        title: 'Mapa | MyPastry'
    })
}

export { getPage, getTodaySales, getMediumPrice, getMediumOrderVolume, getOrdersTable, getCharts, getMap };