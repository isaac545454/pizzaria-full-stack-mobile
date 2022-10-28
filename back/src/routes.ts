import {Router, } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import {isAuth} from './middlewares/isAuth'
const router = Router()

//rota para criar usuario
router.post('/user', new CreateUserController().handle)
//rota para atenticar usuario
router.post('/session', new AuthUserController().handle)

router.get("/me", isAuth, new DetailsUserController().handle)

export {router}

