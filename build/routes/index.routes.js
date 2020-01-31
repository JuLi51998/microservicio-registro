"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { indexController } from "../controllers/indexControllers";
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => { res.send('hola'); });
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
