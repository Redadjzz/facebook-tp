import { Router } from "express";

import authentication from './authentication.route';

/** Middlewares */
import {jwtMiddleware} from '../../middlewares/jwt.middleware';
import user from './user.route';
import post from './post.routes';
import profile from './profile.route';
const api = Router();

api.use("/v1/authentication",authentication);
api.use("/v1/users", user);
api.use('/v1/post',jwtMiddleware({'secret': 'SECRET'}),post);
api.use('/v1/profile',jwtMiddleware({'secret': 'SECRET'}),profile)
export default api;
