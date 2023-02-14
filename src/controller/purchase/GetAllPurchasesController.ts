import { Request, Response } from 'express'
import { GetAllPurchasesService } from '../../service/purchase/GetAllPurchasesService'

class GetAllPurchasesController {
    async handle(req: Request, res: Response) {
        const service = new GetAllPurchasesService();
        const purchase = await service.execute();

        return res.json(purchase);
    }
}

export { GetAllPurchasesController };