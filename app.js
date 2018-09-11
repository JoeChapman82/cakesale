require('dotenv').config();
const express = require('express');
const bootstrap = require('./app/middleware/bootstrap');
const initialiseDbConnection = require('./app/model/init');
const app = express();
const PORT = process.env.PORT || 9700;

bootstrap(app);
initialiseDbConnection();

app.listen(PORT, () => console.log(`Keeping count of cake sales on port ${PORT}`));
