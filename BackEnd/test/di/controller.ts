import { TYPES } from '../../src/di/types';
import { Container } from 'inversify';

// Interface imports begin
import IBasicAuth from '../../src/service/basic-auth';
import IOAuth2 from '../../src/service/oauth2';
import IUserService from '../../src/service/user';
// Interface imports end

// Entity imports begin
import BasicAuthController from '../../src/controller/basic-auth';
import JwtController from '../../src/controller/jwt';
import UserController from '../../src/controller/user';
import IIconService from '../../src/service/icon';
import IconController from '../../src/controller/icon';
// Entity imports end

const container = new Container();

container.bind<IBasicAuth>(TYPES.BasicAuthController).to(BasicAuthController).inSingletonScope();
container.bind<IOAuth2>(TYPES.OAuth2Controller).to(JwtController).inSingletonScope();
container.bind<IUserService>(TYPES.UserController).to(UserController).inSingletonScope();
container.bind<IIconService>(TYPES.UserController).to(IconController).inSingletonScope();

export default container;