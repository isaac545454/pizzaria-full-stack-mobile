import {Response,Request} from 'express'
import { CreateOrderServer } from '../../services/order/CreateOrderServer'


class CreateOrderController{
  async handle(req: Request, res: Response){
    const {table, name } = req.body
  const createOrderServer = new CreateOrderServer()

  const order =await createOrderServer.execute({table, name})

  return res.json(order)
  }
}

export {CreateOrderController}