const getPage = (req, res) => {
    res.render('collections', {
        title: 'Produtos | MyPastry',
        client: req.session.client
    });
}

export {getPage};