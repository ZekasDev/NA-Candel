const express = require("express");
const routes = express.Router();

// Login: 
const OngController = require("./controllers/OngController");



/*
const IncidentController = require("./controllers/IncidentController");
const SessionController = require("./controllers/SessionController");
const ProfileController = require("./controllers/ProfileController");


routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
*/