const getPage = (req, res) => {
    res.render('collections', {title: 'Produtos | MyPastry'});
}

export {getPage};