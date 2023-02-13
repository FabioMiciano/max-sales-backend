import { Request, Response } from 'express';
import { CreateUserService } from '../../service/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const requester_id = req.user_id;
        const { name, email, cpf, password, isAdmin } = req.body

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({ 
            name, 
            email, 
            cpf,
            password,
            isAdmin,
            requester_id
        });

        return res.json(user);
    }
}

export { CreateUserController }