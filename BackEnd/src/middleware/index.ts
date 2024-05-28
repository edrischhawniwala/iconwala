import { Router } from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import ruid from 'express-ruid';

const router: Router = Router();

router.use(ruid({ setInContext: true }));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(cookieParser.default(''));

router.use(cors.default({ origin: true, credentials: true }));

// router.use((req, res, next) => {
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Origin', req.headers.origin);
//   if (req.method === 'OPTIONS') {
//     return res.status(200).end();
//   } else {
//     next();
//   }
// });

export default router;