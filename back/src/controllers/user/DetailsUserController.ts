import { Request, Response } from 'express';
import {DetailsUserServices} from '../../services/user/DetailsUserServices'

class DetailsUserController{
  async handle(req: Request, res: Response){
  
  const user_id = req.user_id
  const detailsUserServices = new DetailsUserServices()
  const user = await detailsUserServices.execute(user_id)
  console.log(user_id);
  

  return res.json(user)
  }
}

export {DetailsUserController}