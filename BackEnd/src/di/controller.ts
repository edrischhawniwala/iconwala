import { TYPES } from './types';
import { Container } from 'inversify';

// Interface imports begin
import IBasicAuth from '../service/basic-auth';
import IOAuth2 from '../service/oauth2';
import IUserService from '../service/user';
import IIconService from '../service/icon';
// Interface imports end

// Entity imports begin
import BasicAuthController from '../controller/basic-auth';
import JwtController from '../controller/jwt';
import UserController from '../controller/user';
import IconController from '../controller/icon';
// Entity imports end

const container = new Container();

container.bind<IBasicAuth>(TYPES.BasicAuthController).to(BasicAuthController).inSingletonScope();
container.bind<IOAuth2>(TYPES.OAuth2Controller).to(JwtController).inSingletonScope();
container.bind<IUserService>(TYPES.UserController).to(UserController).inSingletonScope();
container.bind<IIconService>(TYPES.IconController).to(IconController).inSingletonScope();

export default container;