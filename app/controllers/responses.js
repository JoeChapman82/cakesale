module.exports = {
    ok: (req, res) => res.status(200).send('ok'),
    badRequest: (req, res) => res.status(400).send('Bad Request'),
    serverError: (req, res) => res.status(500).send('Server Error')
};
