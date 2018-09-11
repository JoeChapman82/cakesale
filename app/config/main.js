module.exports = {
    csrfLifespan: '36000',
    isProd: process.env.NODE_ENV === 'production',
    isNotProd: process.env.NODE_ENV !== 'production',
};
