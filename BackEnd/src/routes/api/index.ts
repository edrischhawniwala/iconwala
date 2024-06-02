import { Router } from 'express';

import iconRouter from './icon';

const router = Router();

router.use('/icon', iconRouter);

export default router;