module.exports = {
    index: (req, res) => res.redirect('/'),
    update: (req, res) => res.redirect('/update'),
    notFound: (req, res) => res.redirect('/404'),
    error: (req, res) => res.redirect('/error')
};
