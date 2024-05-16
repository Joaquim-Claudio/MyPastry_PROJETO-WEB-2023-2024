import ProductModel from "../models/product.js";
import { translateCategory, PriceFormat } from "../utils/norm.js";

const getAll = async(req, res) => {
    ProductModel.findAll()
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
    
    ProductModel.findAll(clause || {where: {category}})
        .then((result) => {
            if(category == 'pastel') showCard=true;

            res.render('products', {
                title: translateCategory(category) +' | MyPastry',
                category: translateCategory(category),
                showCard: showCard,
                products: result,
            });

        })

        .catch((error) => {
            console.log(error);
            res.render('products', {
                title: 'Produtos | MyPastry',
                category: translateCategory(category),
                showCard: showCard,
            })
        });
};

const getById = async(req, res) => {
    const id = req.params.id;
    ProductModel.findOne({where: {id}})
        .then((product) => {
            // Format the price to portuguese float format
            product.price = PriceFormat.format(product.price);

            res.render('product-details', {
                title: product.name + ' | MyPastry',
                product: product,
            })
        })

        .catch((error) => {
            console.log(error);
            res.render('product-details', {
                title: 'Detalhes do produto | MyPastry',
                id: id
            });
        })
}

export {getAll, getAllByCategory, getById};