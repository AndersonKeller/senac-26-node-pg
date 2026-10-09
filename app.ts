import { userRoutes } from './src/routes/user.routes';
import expres from "express"
import { connection } from "./connection"
//CONNECTION IMPORTADA PARA O APP USAR

const app = expres()
app.use(expres.json())

//CONNECTION É A CONEXÃO COM O DB, ENTÃO ELA CONSEGUE EXECUTAR QUERYS 
// SQL

//CHAMA A PRIMEIRA CAMADA, AS ROTAS
app.use("/user", userRoutes)
// app.use("/posts", postRoutes)

app.listen(3000, () => {
    console.log("Server rodando na porta 3000")
})