import { Request, Response } from "express";
import pool from "../database";


class InedexController {

    public async list (req: Request, res: Response) {
        const tareas = await pool.query('SELECT * FROM tarea');
        res.json(tareas);
    }
    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const tareas = await pool.query('SELECT * FROM tarea WHERE id = ?', [id]);
        if(tareas.length > 0) {
            return res.json(tareas[0]);
        }
        console.log(tareas);
        res.status(404).json({msj: "El juego no existe"});
    }
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO tarea set ?', [req.body]);
        res.json({msj: "Tarea creada"});

    }
    public delete(req: Request, res: Response) {
        res.json({msj: "Eliminando tarea " + req.params.id });
    }
    public update(req: Request, res: Response){
        res.json({msj: "Actualizando tarea " + req.params.id });
    }
}

export const indexController = new InedexController();