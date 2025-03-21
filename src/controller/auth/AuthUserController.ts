import { Request, Response } from "express";
import { AuthUserService } from "../../service/auth/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { cpf, password } = req.body;
        
        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({cpf, password});

        return res.json(auth);
    }
}

export { AuthUserController }