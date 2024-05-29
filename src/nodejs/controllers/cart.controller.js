import sequelize from '../config/db_connect.js'
import Product from '../models/product.model.js'

const getCart = async (req, res) => {

    if(req.session.cart){
        const cart = {
            items: [],
            total: 0
        }

        for(let item of req.session.cart.items) {
            await Product.findByPk(item.pid)
                .then(result => {
                    cart.items.push({
                        ordProd: {
                            prod: result.dataValues, 
                            quant: item.quant,
                            subTotal: item.subTotal
                        }
                    });
                    cart.total += item.subTotal
                })
    
                .catch(err => {
                    throw new Error(err)
                })
        }

        console.log(`Terminou o for.\nData: ${JSON.stringify(cart)}}`);

        res.render('cart', {
            layout: 'layouts/main',
            title: 'O Meu Pedido | MyPastry',
            cart: cart
        })
    }
    else {
        res.render('cart', {
            layout: 'layouts/main',
            title: 'O Meu Pedido | MyPastry',
        })
    }

}

const addToCart = (req, res) => {
    const {pid, price, quant} = req.body;
    const subTotal = price*quant;
    
    if(!req.session.cart){
        req.session.cart = {
            items: [],
            total: 0
        };
    }
    req.session.cart.items.push({pid, quant, subTotal});
    req.session.cart.total += subTotal;

    res.end();
}


export {getCart, addToCart};