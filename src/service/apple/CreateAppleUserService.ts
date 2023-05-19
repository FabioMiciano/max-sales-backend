import prismaClient from '../../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest {
    name: string,
    email: string,
    cpf: string,
    password: string,
    requester_id: string
}

class CreateAppleUserService {
    async execute({name, email, cpf, password, requester_id}: UserRequest) {

        const requesterUser = await prismaClient.user.findFirst({
            where: {
                id: requester_id
            }
        })

        if(!requesterUser.isAdmin) {
            throw new Error("Only Admin do this");
        }

        if(!cpf) {
            throw new Error("CPF Incorrect");
        }

        const useralreadyExists = await prismaClient.user.findFirst({
            where:{
                cpf: cpf
            }
        })

        if(useralreadyExists) {
            throw Error("User already exists");
        }

        const passwordHash = await hash(password, 13);

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                cpf: cpf,
                password: passwordHash,
                isAdmin: false
            }, 
            select: {
                id: true,
                name: true,
                cpf: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateAppleUserService }