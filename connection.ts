import { Client } from "pg"
// DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<db>
//ARQUIVO DE CONEXÃO COM O BANCO DE DADOS
// PG - BIBLIOTECA DO NODE, ESPECIFICA PRA POSTGRES
export const connection = new Client({
    port: 5432,
    database: "senacrs",
    host: "localhost",
    password: "postgresql",
    user: "postgres"
})
async function connect() {
    await connection.connect().then((res) => {
        console.log("database connected")
    })
}
connect()

