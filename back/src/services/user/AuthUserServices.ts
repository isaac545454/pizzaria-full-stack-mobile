import prismaClient from '../../prisma'
import {compare} from 'bcryptjs'
import {sign}  from 'jsonwebtoken'

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

    //criando token
    const token = sign(
    {
      name: user.name,
      email: user.email
    },
    process.env.JWT_SECRET, 
    {
      subject: user.id,
      expiresIn: '30d'
    }
     )


    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }

  }
}

export {AuthUserServices}