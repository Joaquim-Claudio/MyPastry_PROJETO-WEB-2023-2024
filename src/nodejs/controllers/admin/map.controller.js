import sequelize from '../../config/db_connect.js'
import Location from '../../models/location.model.js';
import ActiveClient from '../../models/active_client.model.js'

Location.hasOne(ActiveClient, {foreignKey: 'loc_id'});
ActiveClient.belongsTo(Location, {foreignKey: 'loc_id'});

const getActiveClients = async (req, res) => {
    
    sequelize.query(`
        select st_distance(st_geomfromtext('point(-9.1970225 38.750553)', 4326)::geography, l1.geom::geography) as dist
        from active_client as ac1
        join location l1 on l1.id = ac1.loc_id;
    `, { type: sequelize.QueryTypes.SELECT })

        .then(result => {
            res.send(result)
        })

        .catch(err => {
            throw new Error(err);
        })
}

export {getActiveClients};