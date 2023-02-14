import { Router } from 'express';

// -- IMPORT MIDDLEWATE --
import { isAuthenticated } from './middlewares/isAuthenticated';

// -- IMPORT AUTH
import { AuthUserController } from './controller/auth/AuthUserController';

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

import multer from 'multer';
import uploadConfing from './config/multer';

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

// -- CATEGORIES ROTES --
router.get('/categories', isAuthenticated, new GetAllCategoryController().handle);
router.post('/categories', upload.single('file'), isAuthenticated, new CreateCategoryController().handle);
router.put('/categories', isAuthenticated, new UpdateCategoryController().handle);
router.delete('categories', isAuthenticated, new DeleteCategoryController().handle);

export { router };