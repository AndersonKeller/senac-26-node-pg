import { Client } from "pg"
// DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<db>

export const connection = new Client({
    port:5432,
    database:"senacrs",
    host:"localhost",
    password:"postgresql",
    user: "postgres"   
})


