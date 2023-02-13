import { Request, Response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const id = req.user_id;
        const {name, email, cpf, password} = req.body;

        const service = new UpdateUserService()
        const updated = await service.execute({id, name, email, cpf, password});

        return res.json(updated);
    }
}

export { UpdateUserController }