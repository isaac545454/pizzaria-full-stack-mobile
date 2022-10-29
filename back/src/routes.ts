import {Router, } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import {CreateCategoryController} from './controllers/category/CreateCategoryController'
import {ListCategoryController} from './controllers/category/ListCategoryController'
import {CreateProductsController} from './controllers/Products/CreateProductsController'
import {isAuth} from './middlewares/isAuth'
const router = Router()

//rota para criar usuario
router.post('/user', new CreateUserController().handle)
//rota para atenticar usuario
router.post('/session', new AuthUserController().handle)

router.get("/me", isAuth, new DetailsUserController().handle)

//rotas category
router.post("/category", isAuth, new CreateCategoryController().handle)
router.get("/category", isAuth, new ListCategoryController().handle)

//rotas products
router.post("/products", isAuth, new CreateProductsController().handle)

export {router}
