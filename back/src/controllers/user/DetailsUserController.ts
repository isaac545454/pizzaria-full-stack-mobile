import { Request, Response } from 'express';
import {DetailsUserServices} from '../../services/user/DetailsUserServices'

class DetailsUserController{
  async handle(req: Request, res: Response){
  
  const detailsUserServices = new DetailsUserServices()
  const user = await detailsUserServices.execute()

  return res.json(user)
  }
}

export {DetailsUserController}