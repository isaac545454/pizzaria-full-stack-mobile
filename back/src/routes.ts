//principais
import { Router } from "express";
import multer from "multer";

//importações do controller
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductsController } from "./controllers/Products/CreateProductsController";
import { ListCategoryByIdController } from "./controllers/products/ListCategoryByIdController";

//importanções de middlewares
import { isAuth } from "./middlewares/isAuth";

//configurações do multer
import uploadConfig from "./config/multer";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

//rota para criar usuario
router.post("/user", new CreateUserController().handle);

//rota para atenticar usuario
router.post("/session", new AuthUserController().handle);

router.get("/me", isAuth, new DetailsUserController().handle);

//rotas category
router.post("/category", isAuth, new CreateCategoryController().handle);
router.get("/category", isAuth, new ListCategoryController().handle);

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

export { router };
