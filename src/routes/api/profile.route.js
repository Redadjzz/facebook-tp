import * as ProfileModel from '../../controllers/profile.controller';
import { Router } from 'express';

const api = Router();


api.get('/:id/profile', ProfileModel.findOneById);
api.patch('/:id/profile', ProfileModel.updateProfile);
api.post('/',ProfileModel.createOne)
api.get('/', ProfileModel.findAll)

export default api;