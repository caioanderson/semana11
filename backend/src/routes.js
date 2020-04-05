const express  = require("express");
const { celebrate, Segments, Joi } = require("celebrate");


const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Criando uma sessão de login
routes.post('/sessions', celebrate({
    [Segments.BODY] : Joi.object().keys({
        id : Joi.string().required()
    }),
    [Segments.HEADERS] : Joi.object({
        authorization : Joi.string().required()
    }).unknown()
}), SessionController.login);


//Listar todas as ongs
routes.get('/ongs', OngController.index);

//Cadastro de ongs com validação
routes.post('/ongs', celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city : Joi.string().required(),
        uf: Joi.string().required().length(2)
    }) 
}) ,OngController.create);

//Listar uma ong especifica validando se tem o id da Ong
routes.get('/profile', celebrate({
    [Segments.HEADERS] : Joi.object({
        authorization : Joi.string().required()
    }).unknown(),
}), ProfileController.index); 

//Listar todos os casos(Profile) validando o numero de pages
routes.get('/incidents', celebrate({
    [Segments.QUERY] : Joi.object().keys({
        page: Joi.number()
    })
}), IncidentsController.index);


//Cadastro de Casos(incidents) validando os campos e se o id da Ong está presente
routes.post('/incidents', celebrate({
    [Segments.BODY] : Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    }),
    [Segments.HEADERS] : Joi.object({
        authorization : Joi.string().required()
    }).unknown()
}), IncidentsController.create);

//Deletar um caso(incident) validando se existe o id
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        id: Joi.number().required()
    })
}),IncidentsController.delete);

module.exports = routes;