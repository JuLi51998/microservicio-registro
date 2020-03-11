import { Request, Response } from "express";
import pool from "../database";


class InedexController {

    public async list (req: Request, res: Response) {
        const tareas = await pool.query('SELECT * FROM tarea');
        res.json(tareas);
    }
    public async listEvents (req: Request, res: Response) {
        const eventos = await pool.query('SELECT * FROM evento');
        res.json(eventos);
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
    public async createEvent(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO evento set ?', [req.body]);
        res.json({msj: "Evento creado"});
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE from tarea WHERE id = ?', [id])
        res.json({message: 'Los datos del usuario han sido eliminados'});
    }
    public async update(req: Request, res: Response){
        const { id } = req.params;
        await pool.query('UPDATE tarea SET ? WHERE id = ?', [req.body, id])
        res.json({message: 'Los datos del usuario han sido actualizados'});
    
    }
}

export const indexController = new InedexController();