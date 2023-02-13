import { Request, Response } from 'express'
import { GetUserService } from '../../service/user/GetUserService';

class GetUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const detailuserService = new GetUserService();

        const user = await detailuserService.execute(user_id);

        return res.json(user);
    }
}

export { GetUserController };