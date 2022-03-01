import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const updateProfile = async ({userId,lastName,firstName}) => {
  return prisma.profile.update({
    where:{
      userId,
    },
    data:{
      lastName,
      firstName,
    }
  })
}

export const findById = async (id) => {
    return prisma.profile.findUnique({
      where: {
        id
      }
    });
  }

  export const findOneById = async (id, select) => {
    return prisma.profile.findUnique({
      where: { id },
      select
    });
  }

  export const deleteOne = async (id) => {
    return prisma.profile.delete({
      where: { id },
    });
  }

  export const findAll = async () => {
    return prisma.profile.findMany();
  }

