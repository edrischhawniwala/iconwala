import { Router } from 'express';

import { authorize } from '../middleware/auth';

import authRouter from './auth';
import mdmRouter from './mdm';
import apiRouter from './api';

const router = Router();

router.use('/auth', authRouter);
router.use('/mdm', authorize, mdmRouter);
router.use('/api', authorize, apiRouter);

export default router;