import { connection } from "../../../connection"
import { ReturnUser } from "../../schemas/user.schemas"

export const updateUserService = async (): Promise<ReturnUser[]> => {

    //se comunica com o banco e executa query
    const users = await connection.query(`select * from "user" u;`)
    //remover senha da resposta

    //estoura o erro do banco
    return users.rows

}