const getPage = (req, res) => {
    res.render('app', {
        title: 'App | MyPastry',
        client: req.session.client
    });
}

export {getPage};