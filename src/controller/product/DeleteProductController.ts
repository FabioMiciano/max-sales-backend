import { Request, Response } from 'express';
import { DeleteProductService } from '../../service/product/DeleteProductService';

class DeleteProductController {
    async handle(req: Request, res: Response) {
        const { id }  = req.body;

        const service = new DeleteProductService();

        const deleteProcess = await service.execute(id);

        return res.json(deleteProcess);
    }
}

export { DeleteProductController };