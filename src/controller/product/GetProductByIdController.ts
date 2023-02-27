import { Request, Response } from 'express'
import { GetProductByIdService } from '../../service/product/GetProductByIdService';

class GetProductByIdController {
    async handle(req: Request, res: Response) {
        const category_id = req.params.id;

        const getAllProductService = new GetProductByIdService();

        const products = await getAllProductService.execute(category_id);

        return res.json(products);
    }
}

export { GetProductByIdController }