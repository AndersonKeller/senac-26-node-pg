import expres from "express"
import { connection } from "./connection"
//CONNECTION IMPORTADA PARA O APP USAR

const app = expres()
app.use(expres.json())

interface CreateUser {
    username: string,
    email: string,
    password: string
}

//CONNECTION É A CONEXÃO COM O DB, ENTÃO ELA CONSEGUE EXECUTAR QUERYS 
// SQL
app.get("/user", async (req, res) => {
    const users = await connection.query(`select * from "user" u;`)
    //remover senha da resposta
    res.status(200).json(users.rows)
})
app.post("/user", async (req, res) => {
    const userData: CreateUser = req.body
    console.log(userData, 'userdata')
    //VALIDAR OS DADOS NA ENTRADA
    //EXIBIR OS ERROS DE ACORDO

    const user = await connection.query(`insert into "user" ("username","password","email") 
        values('${userData.username}','${userData.password}','${userData.email}') returning *;`)

    res.status(201).json(user.rows[0])
})

app.get("/user/:id", async (req, res) => {
    const userId: string = req.params.id
    const user = await connection.query(`select * from "user" u where u.id  = '${userId}';`)

    //SE NÃO ENCONTRAR RETORNAR UM 404

    res.status(200).json(user.rows[0])

})
app.delete("/user/:id", async (req, res) => {
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

app.patch("/user/:id", async (req, res) => {

    //VALIDAR SE O USUÁRIO EXISTE
    //VALIDAR OS CAMPOS DE ENTRADA
    //EXIBIR ERROS COERENTES

})

app.listen(3000, () => {
    console.log("Server rodando na porta 3000")
})