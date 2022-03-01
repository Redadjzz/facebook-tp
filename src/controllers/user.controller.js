// import jwt from 'jsonwebtoken'; 
import * as UserModel from '../models/user.model';
import * as ProfileModel from '../models/profile.model'



export const deleteOne = async ({ params: { id }, body }, response) => {
    const user = await UserModel.deleteOne(Number(id), body);

    response.json({ user });
}; 

export const updateProfile  = async (request, response) => {
    const { id } = request.params;
    const { firstName, lastName } = request.body;
    const user = await ProfileModel.updateOne({
        id: (id),
        firstName,
        lastName,
    })

    response.json({ user });
};