const check = {

    clientSession: (req, res, next) => {
        if (!req.session.client.isLogged) {
            next();
        }
        const url = 'https://mypastry.onrender.com/'
        res.redirect(url);

    }
}

export default check;