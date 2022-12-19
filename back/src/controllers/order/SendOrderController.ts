import {Request, Response} from 'express'
import {SendOrderServices} from '../../services/order/SendOrderServices'

class SendOrderController {
  async handle(req: Request, res: Response){
    const {order_id} = req.body
    const sendOrderServices = new SendOrderServices()
    const order = await sendOrderServices.execute({
        order_id
    })

    return res.json(order)
  }
}

export {SendOrderController}