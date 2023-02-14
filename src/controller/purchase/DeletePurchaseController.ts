import { Request, Response } from 'express';
import { DeletePurchaseService } from '../../service/purchase/DeletePurchaseService';

class DeletePurchaseController {
    async handle(req: Request, res: Response) {
        const { id }  = req.body;

        const service = new DeletePurchaseService();

        const deleteProcess = await service.execute(id);

        return res.json(deleteProcess);
    }
}

export { DeletePurchaseController };