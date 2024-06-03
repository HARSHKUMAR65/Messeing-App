import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2,'username must atleast 2 characters')
.max(20 , 'username must be no more then 20  characters')
.regex(/^a-zA-Z0-9_]+$/,'username must contain any special character')

export const signUpSchema = z.object({
 username : usernameValidation,
 email : z.string().email({message : 'invialid email address'}),
 password : z.string()
 .min(6,{message : 'password must be atleast 6 characters'})   
})