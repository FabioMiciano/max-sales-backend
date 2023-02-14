import { Request, Response } from 'express'
import { CreatePurchaseService } from '../../service/purchase/CreatePurchaseService';

class CreatePurchaseController {
    async handle(req: Request, res: Response) {
        const { user_id, category_id } = req.body;

        const createPurchaseService = new CreatePurchaseService();
        const purchase = await createPurchaseService.execute({ 
            user_id,
            category_id
        });

        return res.json(purchase);
    }
}

export { CreatePurchaseController }