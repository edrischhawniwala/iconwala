import { Router } from 'express';

import { create, fetch, imageSearch, fetchOne, update } from './api';

const router = Router();

router.post('/', create);
router.get('/', fetch);
router.get('/image-search', imageSearch);
router.get('/:id', fetchOne);
router.put('/', update);

export default router;