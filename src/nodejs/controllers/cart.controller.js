import { json } from 'sequelize';
import Product from '../models/product.model.js'
import { translateCategory, PriceFormat } from '../utils/norm.js'

const getCart = async (req, res) => {
    const cart = req.session.cart;

    if(cart){
        const extendedCart = {
            items: [],
            total: 0
        }

        for(let item of cart.items) {
            await Product.findByPk(item.pid)
                .then(result => {

                    extendedCart.items.push({
                        ordProd: {
                            prod: result.dataValues, 
                            quant: item.quant,
                            subTotal: item.subTotal
                        }
                    });

                    
                    extendedCart.total += item.subTotal
                })
                
                .catch(err => {
                    throw new Error(err)
                })
        }

        // Formating the data to display on the view
        for(let value of extendedCart.items){
            value.ordProd.prod.category = translateCategory(value.ordProd.prod.category);
            value.ordProd.prod.price = PriceFormat.format(value.ordProd.prod.price);
            value.ordProd.subTotal = PriceFormat.format(value.ordProd.subTotal);
        }
        extendedCart.total = PriceFormat.format(extendedCart.total);

        return res.render('cart', {
            layout: 'layouts/main',
            title: 'O Meu Pedido | MyPastry',
            cart: extendedCart,
            client: req.session.client
        })
    }
    
    return res.render('cart', {
        layout: 'layouts/main',
        title: 'O Meu Pedido | MyPastry',
        client: req.session.client
    })

}

const addItemToCart = (req, res) => {
    const {pid, price, quant} = req.body;
    const subTotal = price*quant;
    
    if(!req.session.cart){
        req.session.cart = {
            items: [],
            total: 0
        };
    }

    const cart = req.session.cart;

    for(let item of cart.items) {
        if (item.pid == pid) {

            item.quant += quant;
            item.subTotal += subTotal;
            cart.total += subTotal;

            return res.end()
        }
    }

    cart.items.push({pid, price, quant, subTotal});
    cart.total += subTotal;

    return res.end();
}

const updateCartItem = (req, res) => {
    const {pid, action} = req.body;
    const cart = req.session.cart;

    switch(action) {
        case 'decrease':
            for(let item of cart.items) {
                if(item.pid == pid) {
                    if (item.quant > 1) {
                        item.quant--;
                        item.subTotal -= item.price;
                        cart.total -= item.price;
                        break;
                    }
                }
            }
        break;

        case 'increase': 
            for(let item of cart.items) {
                if(item.pid == pid) {
                    item.quant++;
                    item.subTotal += item.price;
                    cart.total += item.price;
                    break;
                }
            }
        break;
    }

    return res.end();
}


const deleteCartItem = (req, res) => {
    const {pid} = req.body;
    const cartItems = req.session.cart.items;

    for(let i=0; i<cartItems.length; i++) {
        if(cartItems[i].pid == pid) {
            cartItems.splice(i, 1);
            break;
        }
    }

    return res.end();
}

const getNumItems = (req, res) => {
    let numItems = 0;
    
    if(req.session.cart) {
        const cartItems = req.session.cart.items;
        for(let item of cartItems) {
            numItems += item.quant;
        }
    }

    return res.send({quant: numItems});
}

const confirmOrder = (req, res) => {
    req.session.cart = undefined;
    res.end();
}

export {getCart, addItemToCart, updateCartItem, deleteCartItem, getNumItems, confirmOrder};