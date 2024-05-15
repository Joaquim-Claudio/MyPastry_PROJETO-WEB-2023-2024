import ProductModel from "../models/product.js";

const getAll = async(req, res) => {
    ProductModel.findAll()
        .then((result) => {
            res.send(result);
        })

        .catch((error) => {
            throw new Error(error);
        });
};

const getByCategory = async(req, res) => {
    const category = req.query.category;
    let clause;

    if(category == 'delicacy') clause = {where: {delicacy:true}};
    
    ProductModel.findAll(clause || {where: {category}})
        .then((result) => {
            res.send(result);
        })

        .catch((error) => {
            throw new Error(error);
        });
};

export {getAll, getByCategory};