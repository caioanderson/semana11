const express  = require("express");
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Criando uma sessão de login
routes.post('/sessions', SessionController.login);


//Listar todas as ongs
routes.get('/ongs', OngController.index);
//Cadastro de ongs
routes.post('/ongs', OngController.create);

//Listar uma ong especifica
routes.get('/profile', ProfileController.index);

//Listar todos os casos(Profile)
routes.get('/incidents', IncidentsController.index);
//Cadastro de Casos(incidents)
routes.post('/incidents', IncidentsController.create);
//Deletar um caso(incident)
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;