import { Request, Response } from 'express'
import { GetPurchaseByUserService } from '../../service/purchase/GetPurchaseByUserService';

class GetPurchaseByUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const service = new GetPurchaseByUserService();

        const purchase = await service.execute(user_id);

        return res.json(purchase);
    }
}

export { GetPurchaseByUserController };