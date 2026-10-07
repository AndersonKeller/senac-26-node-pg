import expres from "express"
import { connection } from "./connection"


const app = expres()
async function connect() {

    await connection.connect().then((res) => {
        console.log("database connected")
    })
}
connect()
app.get("/user", async (req, res) => {
    const users = await connection.query(`select * from "user" u;`)

    res.status(200).json(users.rows)
})
app.post("/user", async (req, res) => {
    const user = await connection.query(`insert into "user" ("username","password","email") values('teste2','1234','email@email.com');`)

    res.status(201).json(user.rows)
})
app.listen(3000, () => {

    console.log("Server rodando na porta 3000")
})