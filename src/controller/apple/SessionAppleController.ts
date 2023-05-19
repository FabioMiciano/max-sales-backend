import { Request, Response } from "express";
import { SessionAppleService } from "../../service/apple/SessionAppleService";

class SessionAppleController {
    async handle(req: Request, res: Response) {

        const service = new SessionAppleService()

        const session =  await service.execute(req.headers.authorization)

        return res.json(session);
    }
}

export { SessionAppleController }