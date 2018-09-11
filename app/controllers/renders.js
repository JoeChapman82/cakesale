module.exports = {
    index: (req, res) => res.render('index'),
    login: (req, res) => res.render('login'),
    update: (req, res) => res.render('update'),
    notFound: (req, res) => res.render('404'),
    error: (req, res) => res.render('error')
};
