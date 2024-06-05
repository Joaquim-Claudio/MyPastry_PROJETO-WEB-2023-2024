import Product from "../models/product.model.js";
import Prod_Ing from "../models/prod_ing.model.js";
import Ingredient from "../models/ingredient.model.js";
import { translateCategory, PriceFormat } from "../utils/norm.js";

const getAll = async(req, res) => {
    Product.findAll()
        .then((result) => {
            res.send(result);
        })

        .catch((error) => {
            throw new Error(error);
        });
};

const getAllByCategory = async(req, res) => {
    const category = req.query.category;
    let clause;
    let showCard = false;

    if(category == 'delicacy') clause = {where: {delicacy:true}};
    
    Product.findAll(clause || {where: {category}})
        .then((result) => {
            if(category == 'pastel') showCard=true;

            res.render('products', {
                title: translateCategory(category) +' | MyPastry',
                category: translateCategory(category),
                showCard: showCard,
                products: result,
                client: req.session.client
            });

        })

        .catch((error) => {
            console.log(error);
            res.render('products', {
                title: 'Produtos | MyPastry',
                category: translateCategory(category),
                showCard: showCard,
                client: req.session.client
            })
        });
};

const getById = async(req, res) => {
    const id = req.params.id;
    Product.findOne({where: {id}, include: Ingredient})
        .then((product) => {
            // Format the price to portuguese float format
            product.price = PriceFormat.format(product.price);
            
            res.render('product-details', {
                title: product.name + ' | MyPastry',
                product: product,
                client: req.session.client
            })
        })

        .catch((error) => {
            console.log(error);
            res.render('product-details', {
                title: 'Detalhes do produto | MyPastry',
                client: req.session.client,
                id: id
            });
        })
}

export {getAll, getAllByCategory, getById};