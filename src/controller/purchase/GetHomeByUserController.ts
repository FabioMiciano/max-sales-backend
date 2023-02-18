import { Request, Response } from 'express'
import { GetHomeByUserService } from '../../service/purchase/GetHomeByUserService';

class GetHomeByUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const service = new GetHomeByUserService();

        const purchase = await service.execute(user_id);

        return res.json(purchase);
    }
}

export { GetHomeByUserController };