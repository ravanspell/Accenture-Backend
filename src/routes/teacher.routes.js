import { Router } from 'express';
import { teacherController } from '../controllers/index.js';

const router = Router();

router
  .route('/')
  .post(teacherController.create)
  .get(teacherController.get);

export default router;
