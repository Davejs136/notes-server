import { Router } from 'express';
import { auth } from '../controllers';
import { verifyToken } from '../middlewares';

const router = Router();

router.get('/', auth.index);
router.get('/me', verifyToken, auth.me);
router.post('/register', auth.register);
router.post('/login', auth.login);

export default router;
