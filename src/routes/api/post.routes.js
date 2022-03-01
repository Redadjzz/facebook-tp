import { Router } from 'express';
import * as PostController from '../../controllers/post.controller';

const api = Router();

api.post('/', PostController.createOne);
api.get('/:id', PostController.findById);
api.get('/', PostController.findAll);
api.patch('/:id', PostController.updateOne);
api.delete('/:id', PostController.deleteOne);

export default api;
