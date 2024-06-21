import { Router, Request, Response, NextFunction } from 'express';
import { parse, BasicAuthResult } from 'basic-auth';
import { get } from 'lodash';

import { container } from '../../di';
import { TYPES } from '../../di/types';
import IOAuth2 from '../../service/oauth2';

import { authenticate } from '../../middleware/auth/index';

import { AuthorizationError } from '../../error-handler/definition';
import { TokenError, Token } from '../../entity/oauth2';
import passport from 'passport';
import { error } from 'console';

const oAuth2Controller: IOAuth2 = container.get<IOAuth2>(TYPES.OAuth2Controller);

const router = Router();

router.use('/login', authenticate, (req: Request, res: Response, next: NextFunction) => {
  const user: BasicAuthResult | undefined = parse(req.get('Authorization') || '');
  const userObj = { username: get(user, 'name') };
  oAuth2Controller.generate(userObj)
    .then((token: TokenError | Token) => res.json(token))
    .catch((error: TokenError) => next(new AuthorizationError(error.description || error.message)));
});

router.use('/refresh-token', (req: Request, res: Response, next: NextFunction) => {
  const refreshToken = req.get('bearer') || '';
  oAuth2Controller.refresh(refreshToken)
    .then((token: TokenError | Token) => res.json(token))
    .catch((error: TokenError) => next(new AuthorizationError(error.description || error.message)));
});

router.get('/login/success', (req, res)=>{
  if (req.user) {
    res.status(200).json({
      error: false,
      message: 'Successfully Logged in',
      user: req.user
    })
  } else {
    res.status(403).json({error: true, message: 'Not Authorized'});
  }
})

router.get(
  '/login/failed',
  (req, res) => {
    res.status(401).json({
      error: true,
      message: 'Login Failed'
    })
  }
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_APP_URL,
    failureRedirect: '/login/failed'
  })
);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email']}));
router.get('/logout', (req, res) => {
  req.logOut({keepSessionInfo: false}, (err) => console.error(err));
  res.redirect(process.env.CLIENT_APP_URL || '');
});

export default router;