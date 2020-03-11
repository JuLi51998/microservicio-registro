"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/tareas', indexControllers_1.indexController.list);
        this.router.get('/tareas/:id', indexControllers_1.indexController.getOne);
        this.router.post('/tareas', indexControllers_1.indexController.create);
        this.router.delete('/tareas/:id', indexControllers_1.indexController.delete);
        this.router.put('/tareas/:id', indexControllers_1.indexController.update);
        this.router.post('/eventos', indexControllers_1.indexController.createEvent);
        this.router.get('/eventos', indexControllers_1.indexController.listEvents);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
