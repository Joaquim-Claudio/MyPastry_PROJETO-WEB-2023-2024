import ClientModel from "../models/client.js";

const getByName = async(req, res) => {
     const name = req.query.name;
     ClientModel.findOne({where: {name}})
        .then((client) => {
            res.send(client);
        })

        .catch((error) => {
            throw new Error(error);
        });
};

export {getByName};