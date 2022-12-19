import {Request, Response} from 'express'
import { FinishOrderServices } from '../../services/order/FinishOrderServices'

class FinishOrderController{
  async handle(req: Request, res: Response){
  const {order_id} = req.body
  const finishOrderServices = new FinishOrderServices()
  const order = await finishOrderServices.execute({order_id})
  return res.json(order)
  }
}

export {FinishOrderController}