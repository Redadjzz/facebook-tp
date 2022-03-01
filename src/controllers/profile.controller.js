import { response } from 'express';
import * as ProfileModel from '../models/profile.model'



export const createOne = async (request, response) => {
  const {user}= request
  const { lastNameName,
    firstName, } = request.body;


  const profile = await ProfileModel.createOne({
   lastNameName,
    firstName,
    authorId: user.id,
  });

  response.status(201).json({ profile });
}

export const updateProfile = async (request, response) => {
  const { id } = request.params;
  const { firstName, lastName } = request.body;
  const user = await ProfileModel.updateOne({
      id,
      firstName,
      lastName,
  })

  response.json({ user });
}
export const deleteOne = async (request, response) => {
  const id = Number(request.params.id);
  
  await ProfileModel.deleteOne(id);

  response.status(204).end();
}
export const findAll = async (_request, response) => {
  response.json({
    profiles: await ProfileModel.findAll(),
  });
}

export const findOneById = async (request, response, next) => {
  const id = Number(request.params.id);
  const profile= await ProfileModel.findOneById(id)
  

  response.json({
    profile,
  })
}


