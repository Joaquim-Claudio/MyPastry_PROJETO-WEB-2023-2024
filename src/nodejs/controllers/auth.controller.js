import crypto from 'crypto';
import {google} from 'googleapis'
import url from 'url';
import dotenv from 'dotenv';
dotenv.config();

const oauth2Client = new google.auth.OAuth2(
    process.env.GAPI_CLIENT_ID,
    process.env.GAPI_CLIENT_SECRET,
    process.env.GAPI_REDIRECT_URL
  )
  
  const scopes = [
    'https://www.googleapis.com/auth/drive.metadata.readonly'
  ];
  


const Authenticate = (req, res) => {

    const state = crypto.randomBytes(32).toString('hex');
    req.session.state = state;

    const authorizationUrl = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
        /** Pass in the scopes array defined above.
             * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
        scope: scopes,
        // Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes: true,
        // Include the state parameter to reduce the risk of CSRF attacks.
        state: state
    });

    res.redirect(authorizationUrl);
}

const ResponseHandler = async (req, res) => {
    const q = url.parse(req.url, true).query;

    if(q.error) {
        console.log(q.error);

    } else if (q.state !== req.session.state) {
        console.log('State mismatch. Possible CSRF attack');
        res.end('State mismatch. Possible CSRF attack');

    } else{
        const {tokens} = await oauth2Client.getToken(q.code);
        oauth2Client.setCredentials(tokens);

        console.log(JSON.stringify(tokens, null, 2));

        res.end()
    }
}

const SignIn = (req, res) => {

}

export {Authenticate, ResponseHandler};