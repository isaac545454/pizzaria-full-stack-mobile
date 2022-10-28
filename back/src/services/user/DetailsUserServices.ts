import prismaClient from '../../prisma'

class DetailsUserServices{
  async execute(){
    return {ok: true}
  }
}

export {DetailsUserServices}