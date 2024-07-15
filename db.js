const Knex = require('knex'); // llamada a la libreria knex
const { Model } = require('objection') //llamada a la libreria objection
const knexConfig = require('./knexfile')


const knex = Knex(knexConfig.development);
Model.knex(knex);

module.exports =Knex;