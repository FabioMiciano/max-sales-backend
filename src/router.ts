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

import multer from 'multer';

const router = Router();

// -- USER ROTES --
router.get('/all/users', isAuthenticated, new AllUserController().handle);
router.get('/users', isAuthenticated, new GetUserController().handle);
router.post('/users', new CreateUserController().handle);
router.put('/users', isAuthenticated, new UpdateUserController().handle);
router.put('/admin/users', isAuthenticated, new UpdateUserByAdminController().handle);
router.delete('/users', isAuthenticated, new DeleteUserController().handle);

// -- AUTH LOGIN -- 
router.post('/session', new AuthUserController().handle);

export { router };