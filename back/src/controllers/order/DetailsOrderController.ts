import {Request, Response} from 'express'
import {DetailsOrderServices} from '../../services/order/DetailsOrderServices'

class DetailsOrderController{
    async handle (req: Request, res: Response){

    const order_id = req.query.order_id as string
      const detailSOrderServices = new DetailsOrderServices()
      const order  = await detailSOrderServices.execute({order_id})

      return res.json(order)
    }
}

export {DetailsOrderController}