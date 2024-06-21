import './env';
import './di';

import express from 'express';
import { Server } from 'http';
import { Request, Response, NextFunction } from 'express';
import cookieSession from 'cookie-session';
import passport from 'passport';

import { container } from './di';
import { TYPES } from './di/types';
import IRepository from './core/repository/definition';

import eventHandler from './event';
import swaggerRoute from './swagger';
import securityMiddleware from './middleware/security';
import coreMiddleware from './middleware';
import routes from './routes';
import errorHandlerMiddleware from './error-handler';

import { APINotFoundError } from './error-handler/definition';
import PassportGoogleOauth20 from 'passport-google-oauth20';

const repository: IRepository = container.get<IRepository>(TYPES.IRepository);

const app = express();

app.use(cookieSession({
  name: "session",
  keys: ["iconwala"],
  maxAge: 24 * 60 * 60 * 100
}));

passport.use(
  new PassportGoogleOauth20.Strategy(
    {
      clientID: process.env['GOOGLE.CLIENT_ID'] || '',
      clientSecret: process.env['GOOGLE.CLIENT_SECRET'] || '',
      callbackURL: "/auth/google/callback",
      scope: ['profile', 'email'],
    },
    function (accessToken, refreshToken, profile, callback){
      callback(null, profile);
    }
  )
);

passport.serializeUser((user: Express.User, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());
app.use(securityMiddleware);
app.use(swaggerRoute);
app.use(coreMiddleware);
app.use(routes);
app.use((req: Request, res: Response, next: NextFunction) => { next(new APINotFoundError()); });
app.use(errorHandlerMiddleware);

const server: Server = app.listen((process.env.NODE_PORT || process.env['APP.PORT']), () => {
  eventHandler.emit('sys-info', `Express app started at ${process.env.NODE_PORT || process.env['APP.PORT']}.`);
});

const closeApp = async (server: Server) => {
  try { await repository.disconnect(); } catch (err) { }
  try { server.close(); } catch (err) { }
  eventHandler.emit('sys-info', 'Shutting down app.');
  process.exit(0);
};

process.on('SIGINT', () => { closeApp(server); });
process.on('SIGTERM', () => { closeApp(server); });

export default app;
