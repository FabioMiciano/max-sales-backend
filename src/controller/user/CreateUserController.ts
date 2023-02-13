import { Request, Response } from 'express';
import { CreateUserService } from '../../service/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, cpf, password, isAdmin } = req.body

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({ 
            name, 
            email, 
            cpf,
            password,
            isAdmin
        });

        return res.json(user);
    }
}

export { CreateUserController }