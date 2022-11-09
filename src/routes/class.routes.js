import { Router } from 'express';
import { classController } from '../controllers/index.js';

const router = Router();

router
  .route('/')
  .post(classController.create)
  .get(classController.get);

export default router;
