import { Request, Response } from 'express';
import { DeleteUserService  } from '../../service/user/DeleteUserService';

class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id }  = req.body;

        const service = new DeleteUserService();

        const deleteProcess = await service.execute(id);

        return res.json(deleteProcess);
    }
}

export { DeleteUserController };