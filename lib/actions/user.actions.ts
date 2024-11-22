import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient();

export async function createUser(data: User ) {
  try {
    const user = await prisma.user.create({data})
    return {user}
  }catch (error){
    return {error}
  }
}

