import { userController } from '../controllers/user.controller';
import { CreateUser } from '../schemas/user.schemas';
import { connection } from './../../connection';
import { Router } from "express"

export const userRoutes: Router = Router()

userRoutes.get("", userController.getUsers)

userRoutes.post("", async (req, res) => {
    const userData: CreateUser = req.body
    console.log(userData, 'userdata')
    //VALIDAR OS DADOS NA ENTRADA
    //EXIBIR OS ERROS DE ACORDO

    const user = await connection.query(`insert into "user" ("username","password","email") 
        values('${userData.username}','${userData.password}','${userData.email}') returning *;`)

    res.status(201).json(user.rows[0])
})

userRoutes.get("/:id", async (req, res) => {
    const userId: string = req.params.id
    const user = await connection.query(`select * from "user" u where u.id  = '${userId}';`)

    //SE NÃO ENCONTRAR RETORNAR UM 404

    res.status(200).json(user.rows[0])

})
userRoutes.delete("/:id", async (req, res) => {
    const userId: string = req.params.id
    const user = await connection.query(`delete from "user" u where u.id = '${userId}';`)
    console.log(user.rowCount)
    if (user.rowCount === 0) {
        res.status(404).json({
            erro: "usuário não encontrado"
        })
    }
    res.status(204).send()
})

userRoutes.patch("/:id", async (req, res) => {

    //VALIDAR SE O USUÁRIO EXISTE
    //VALIDAR OS CAMPOS DE ENTRADA
    //EXIBIR ERROS COERENTES

})