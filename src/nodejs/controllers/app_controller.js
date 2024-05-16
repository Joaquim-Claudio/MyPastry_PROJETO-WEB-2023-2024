const getPage = (req, res) => {
    res.render('app', {title: 'App | MyPastry'});
}

export {getPage};