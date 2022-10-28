import prismaClient from '../../prisma'
import {compare} from 'bcryptjs'

interface AuthRequest{
  email: string;
  password: string;
}
class AuthUserServices {
  async execute({email, password }: AuthRequest){
    //verificar se o email existe 
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })
    
   
    if(!user){
      throw new Error("email ou senha incoreto")   
    }

    //verificando senha
    const passwordMath = await compare(password, user.password)

    if(!passwordMath){
      throw new Error("email ou senha incoreto")   
    }


    return {ok: true}

  }
}

export {AuthUserServices}