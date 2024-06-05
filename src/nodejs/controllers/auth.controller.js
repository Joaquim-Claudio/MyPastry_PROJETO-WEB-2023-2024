import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';
dotenv.config();


import Client from '../models/client.model.js';

const authClient = new OAuth2Client()

const Authenticate = async (req, res) => {
    const {token} = req.body;
    
    try {
        const ticket = await authClient.verifyIdToken({
          idToken: token,
          audience: '628742861226-ul89fiklsps4amtml44koa8ta8ifjms8.apps.googleusercontent.com',
        });

        const userData = ticket.getPayload();
        const google_id = userData['sub'];

        let client = await Client.findOne({where: {google_id}});

            if(client === null) {
                client = await Client.create({
                    name: userData.name,
                    email: userData.email,
                    google_id: google_id
                })
            }

            req.session.client = client;
            
            console.log(JSON.stringify(req.session.client, null, 2));

            res.redirect('/auth/redirect');

    } catch (error) {
        res.status(401).json('Failed to sign in.');
    }
}


const Redirect = (req, res) => {
    return res.status(200).send();
}

const Logout = (req, res) => {
    const {action} = req.body;

    if(action == 'logout') {
        req.session.destroy( function(err) {
            if(err) {
                return res.status(404).json({error: err});
            }

            return res.status(200).send();
        });
    }
}

export {Authenticate, Redirect, Logout};