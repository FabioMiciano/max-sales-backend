import { Router } from 'express';

// -- IMPORT MIDDLEWATE --
import { isAuthenticated } from './middlewares/isAuthenticated';

// -- IMPORT AUTH
import { AuthUserController } from './controller/auth/AuthUserController';
import { AuthAdminUserController } from './controller/auth/AuthAdminUserController';

// -- IMPORT ROUTES --
import { CreateUserController } from './controller/user/CreateUserController';
import { AllUserController } from './controller/user/AllUserController';
import { GetUserController } from './controller/user/GetUserController';
import { UpdateUserByAdminController } from './controller/user/UpdateUserByAdminController';
import { UpdateUserController } from './controller/user/UpdateUserController';
import { DeleteUserController } from './controller/user/DeleteUserController';

// -- IMPORT CATEGORIES --
import { CreateCategoryController } from './controller/category/CreateCategoyController';
import { DeleteCategoryController } from './controller/category/DeleteCategoryController';
import { GetAllCategoryController } from './controller/category/GetAllCategoryController';
import { UpdateCategoryController } from './controller/category/UpdateCategoryController';

// -- IMPORT PRODUCTS --
import { CreateProductController } from './controller/product/CreateProductController';
import { DeleteProductController } from './controller/product/DeleteProductController';
import { GetAllProductsController } from './controller/product/GetAllProductsController';
import { GetProductByIdController } from './controller/product/GetProductByIdController';
import { UpdateProductController } from './controller/product/UpdateProductController';

// -- IMPORT PURCHASES --
import { CreatePurchaseController } from './controller/purchase/CreatePurchaseController';
import { DeletePurchaseController } from './controller/purchase/DeletePurchaseController';
import { GetAllPurchasesController } from './controller/purchase/GetAllPurchasesController';

// -- IMPORT SERVER DRIVEN UI --
import { GetHomeByUserController } from './controller/purchase/GetHomeByUserController';

import multer from 'multer';
import uploadConfing from './config/multer';
import { GetPurchasesAvailableByUserController } from './controller/purchase/GetPurchasesAvailableByUserController';

const router = Router();
const upload = multer(uploadConfing.upload("./tmp"));

// -- USER ROTES --
router.get('/all/users', isAuthenticated, new AllUserController().handle);
router.get('/users', isAuthenticated, new GetUserController().handle);
router.post('/users', isAuthenticated, new CreateUserController().handle);
router.put('/users', isAuthenticated, new UpdateUserController().handle);
router.put('/admin/users', isAuthenticated, new UpdateUserByAdminController().handle);
router.delete('/users', isAuthenticated, new DeleteUserController().handle);

// -- AUTH LOGIN -- 
router.post('/session', new AuthUserController().handle);
router.post('/admin/session', new AuthAdminUserController().handle);

// -- CATEGORIES ROTES --
router.get('/categories', isAuthenticated, new GetAllCategoryController().handle);
router.post('/categories', upload.single('file'), isAuthenticated, new CreateCategoryController().handle);
router.put('/categories', isAuthenticated, new UpdateCategoryController().handle);
router.delete('/categories', isAuthenticated, new DeleteCategoryController().handle);

// -- PRODUCTS ROTES --
router.get('/products', isAuthenticated, new GetAllProductsController().handle);
router.get('/products/:id', isAuthenticated, new GetProductByIdController().handle);
router.post('/products', upload.single('file'), isAuthenticated, new CreateProductController().handle);
router.put('/products', isAuthenticated, new UpdateProductController().handle);
router.delete('/products', isAuthenticated, new DeleteProductController().handle);

// -- PRUCHASE ROTES --
router.get('/purchases', isAuthenticated, new GetAllPurchasesController().handle);
router.get('/users/purchases', isAuthenticated, new GetPurchasesAvailableByUserController().handle)
router.post('/purchases', isAuthenticated, new CreatePurchaseController().handle);
router.delete('/purchases', isAuthenticated, new DeletePurchaseController().handle);

// -- SERVER DRIVEN UI  ROTES --
router.get('/home', isAuthenticated, new GetHomeByUserController().handle);

export { router };