import { Request, Response } from "express";
import { UpdatePurchaseService } from "../../service/purchase/UpdatePurchaseService";

class UpdatePurchaseController {
    async handle(req: Request, res: Response) {
        const {id, user_id, category_id} = req.body;
        const service = new UpdatePurchaseService()
        const updated = await service.execute({id, user_id, category_id});

        return res.json(updated);
    }
}

export { UpdatePurchaseController }