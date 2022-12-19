//principais
import { Router } from "express";
import multer from "multer";

//importações do controller
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductsController } from "./controllers/products/CreateProductsController";
import { ListCategoryByIdController } from "./controllers/products/ListCategoryByIdController";
import {CreateOrderController} from './controllers/order/CreateOrderComtroller'
import {RemoveOrderController} from './controllers/order/RemoveOrderController'
import {AddOrderItemsController} from './controllers/order/AddOrderItemsController'
import {RemoveItemsController} from './controllers/order/RemoveItemsController'
import {SendOrderController} from './controllers/order/SendOrderController'


//importanções de middlewares
import { isAuth } from "./middlewares/isAuth";

//configurações do multer
import uploadConfig from "./config/multer";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

//rota para criar usuario
router.post(
  "/user", 
  new CreateUserController().handle
  );

//rota para atenticar usuario
router.post(
  "/session", 
  new AuthUserController().handle
);

router.get(
  "/me",
   isAuth, 
   new DetailsUserController().handle
);

//rotas category
router.post(
  "/category", 
  isAuth, 
  new CreateCategoryController().handle
);

router.get(
  "/category", 
  isAuth, 
  new ListCategoryController().handle);

//rotas products
router.post(
  "/products",
  isAuth,
  upload.single("file"),
  new CreateProductsController().handle
);

router.get(
  "/category/products",
  isAuth,
  new ListCategoryByIdController().handle
);

//rotas order 
router.post(
  "/order",
  isAuth,
  new CreateOrderController().handle
)

router.delete(
  '/order',
  isAuth,
  new RemoveOrderController().handle
)

router.post(
  "/order/add",
  isAuth,
  new AddOrderItemsController().handle
)

router.delete(
  "/order/remove",
  isAuth,
  new RemoveItemsController().handle
)

router.patch(
  "/order/send",
  isAuth,
  new SendOrderController().handle
)

export { router };
