import Client from "../models/client.model.js";

const getByName = async(req, res) => {
     const name = req.query.name;
     Client.findOne({where: {name}})
        .then((client) => {
            res.send(client);
        })

        .catch((error) => {
            throw new Error(error);
        });
};

export {getByName};