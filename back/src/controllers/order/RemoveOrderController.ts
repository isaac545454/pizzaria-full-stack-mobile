import { Request, Response } from "express";
import { RemoveOrderServer } from "../../services/order/RemoveOrderServer";

class RemoveOrderController{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string;
        const removeOrderServer = new RemoveOrderServer()

        const order = await removeOrderServer.execute({order_id})

        return res.json(order)
    }
}

export {RemoveOrderController}