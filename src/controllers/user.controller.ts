import { Request, Response } from "express";
import { getUsersService } from "../services/user/getUsers.service";
import { ReturnUser } from "../schemas/user.schemas";

export const userController = {
    //tipo a request e a resposta do express
    async getUsers(req: Request, res: Response) {
        //trataria todas os dados da requisição

        //cahama e serviço
        const users: ReturnUser[] = await getUsersService()

        //serviço devolve a informação ou erro
        //controller devolve a resposta
        res.status(200).json(users)
    },
    async createUser() { },
    async updateUser(){}
}