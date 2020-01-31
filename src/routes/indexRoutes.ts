import { Router } from "express";
import { indexController } from "../controllers/indexControllers";

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/tareas', indexController.list);
        this.router.get('/tareas/:id', indexController.getOne);
        this.router.post('/tareas', indexController.create);
        this.router.delete('/tareas/:id', indexController.delete);
        this.router.put('/tareas/:id', indexController.update);
    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;