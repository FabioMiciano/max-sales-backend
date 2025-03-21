import { Request, Response } from 'express'
import { GetAllProductsService } from '../../service/product/GetAllProductsService'

class GetAllProductsController {
    async handle(res: Request, req: Response) {

        const getAllProductService = new GetAllProductsService();

        const products = await getAllProductService.execute();

        return req.json(products);
    }
}

export { GetAllProductsController }