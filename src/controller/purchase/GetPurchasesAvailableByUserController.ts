import { Request, Response } from 'express'
import { GetPurchasesAvailableByUserService } from '../../service/purchase/GetPurchasesAvailableByUserService';

class GetPurchasesAvailableByUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const service = new GetPurchasesAvailableByUserService();

        const purchase = await service.execute(user_id);

        return res.json(purchase);
    }
}

export { GetPurchasesAvailableByUserController };