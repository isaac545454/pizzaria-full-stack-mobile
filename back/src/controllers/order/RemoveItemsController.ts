import {Request, Response} from 'express'
import {RemoveItemsServices} from '../../services/order/RemoveItemsServices'

class RemoveItemsController{
    async handle(req: Request, res: Response){
    const item_id = req.query.item_id   as string
    const removeItemsServices = new RemoveItemsServices()
    const order = await removeItemsServices.execute({item_id}) 

    return res.json(order)
    }
}

export {RemoveItemsController}