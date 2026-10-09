import { returnUserSchema } from './../../schemas/user.schemas';
import { connection } from "../../../connection";
import { CreateUser, ReturnUser } from "../../schemas/user.schemas";

export const createUserService = async (userData: CreateUser): Promise<ReturnUser> => {

    const res = await connection.query(`insert into "user" ("username","password","email") 
values('${userData.username}','${userData.password}','${userData.email}') returning *;`)

    const user = returnUserSchema.parse(res.rows[0])
    return user

}