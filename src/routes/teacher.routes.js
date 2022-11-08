import { Router } from 'express';
import {teacherController} from '../controllers/index.js';

const router = Router();

router
  .route('/')
  .post(teacherController.create)
  // .get(getUsers);

// router
//   .route('/:userId')
//   .get( getUser)
//   .patch( updateUser)
//   .delete( deleteUser);

export default router;
