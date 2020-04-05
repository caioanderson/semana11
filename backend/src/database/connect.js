const knex = require('knex');
const configuration = require('../../knexfile');

const env = process.env.NODE_ENV === 'teste' ? configuration.test : configuration.development;

const connect = knex(env);

module.exports = connect;