import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
  name: string;
  email: string;
  password: string;
}

class CreateUserService{
  async execute({name, email, password}: UserRequest){
    
    //verificar email
    if(!email){
      throw new Error("email invalido")
    }

    //verificar se ja está cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    //usuario ja existe 
    if(userAlreadyExists){
      throw new Error("email já cadastrado")
    }

    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: passwordHash,
      },
      select:{
        id: true,
        name: true,
        email: true,
      }
    })
    
    
    return user
  }
} 

export { CreateUserService }
