import { email, z } from "zod"

export const createUserSchema = z.object({
    username: z.string("username é obrigatório").min(5, "minimo de 5 caracteres"),
    email: z.email(),
    password: z.string()
})

export const returnUserSchema = createUserSchema.extend({
    id: z.number()
}).omit({ password: true })

export type CreateUser = z.infer<typeof createUserSchema>
export type ReturnUser = z.infer<typeof returnUserSchema>

// if(!req.email){
//     res.status(404).json({
//         erro:"email é obrigatorio"
//     })
// }
// if(!req.body.usernam){
//     res.status(403).json({

//     })
// }
// if(req.body.username.length < 5){

// }
// delete res.rows[0].password