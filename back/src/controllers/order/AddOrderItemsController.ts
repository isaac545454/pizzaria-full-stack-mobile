import {Request, Response} from 'express'
import { AddOrderItemsServices } from '../../services/order/AddOrderItemsServices'

class AddOrderItemsController{
    async handle(req: Request, res: Response){
    const {order_id, product_id, amount } = req.body
    const addOrderItemsServices = new  AddOrderItemsServices()
    const order = await addOrderItemsServices.execute({order_id, product_id, amount})

    return res.json(order)
    }
}

export {AddOrderItemsController}