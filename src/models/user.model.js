import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = async ({ email,
  password }) =>
prisma.User.create({
  data: {
      email,
      password, 
  },

});

export const findByCredentials = ({ email, password }) =>
  prisma.User.findUnique({
    where: {
      email,
    },
  });

export const findById = ({ id }) =>
  prisma.User.findUnique({
    where: { id },
  });


export const findAll = async () => 
prisma.user.findMany();



export const deleteOne = async (id) =>
prisma.user.delete({
    where: { 
        id 
    }
}); 
