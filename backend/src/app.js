const expres = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes')
const app = expres();

app.use(cors());
app.use(expres.json());
app.use(routes);
app.use(errors());


module.exports = app;