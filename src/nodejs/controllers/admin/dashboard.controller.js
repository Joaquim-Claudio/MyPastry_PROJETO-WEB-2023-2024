const getPage = (req, res) => {
    res.render('admin/dashboard', 
    {
        layout: 'layouts/admin',
        title: 'Dashboard | MyPastry'
    });
}

export {getPage};