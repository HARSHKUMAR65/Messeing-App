import {z} from 'zod'

export const sinInSchena = z.object({
    indentifier : z.string(),
    password : z.string(),
})