import { Request, Response} from 'express';
import {AuthUserServices} from '../../services/user/AuthUserServices'

class AuthUserController{
  async handle(req: Request, res: Response){
     const {email, password} = req.body 
     const authUserController = new AuthUserServices()
     const auth = await authUserController.execute({
      email,
      password
     })

     return res.json(auth)
  }
}

export {AuthUserController }