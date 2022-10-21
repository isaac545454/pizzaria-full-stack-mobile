import {Router, Request, Response} from 'express';

const router = Router()

router.get('/', (req: Request, res: Response)=>{
   return res.json({ok: true})
   //throw new Error('erro ao fazer a requisição')
})

export {router}