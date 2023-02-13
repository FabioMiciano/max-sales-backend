import prismaClient from '../../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest {
    name: string,
    email: string,
    cpf: string,
    password: string,
    isAdmin: boolean
}

class CreateUserService {
    async execute({name, email, cpf, password, isAdmin}: UserRequest) {

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
                isAdmin: isAdmin
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

export { CreateUserService }