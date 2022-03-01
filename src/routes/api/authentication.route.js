import { Router } from 'express';
import * as AuthenticationController from '../../controllers/authentication.controller';

const api = Router();

api.post('/login', AuthenticationController.LoginDTO);
api.post('/register', AuthenticationController.RegisterDTO);

export default api;
