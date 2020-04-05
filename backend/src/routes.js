
const express = require('express');
const OngControllers = require('./controllers/OngControllers.js');
const IncidentControllers = require('./controllers/IncidentController.js');
const ProfileController = require('./controllers/ProfileController.js');
const SessionController = require('./controllers/SessionController.js');
const routes = express.Router(); 

routes.post('/session', SessionController.create )
routes.post('/ongs', OngControllers.create )
routes.post('/incidents', IncidentControllers.create )


routes.get('/ongs', OngControllers.index )
routes.get('/incidents', IncidentControllers.index )
routes.get('/profile', ProfileController.index )


routes.delete('/incidents/:id', IncidentControllers.delete )

module.exports = routes