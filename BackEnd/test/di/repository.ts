import { TYPES } from '../../src/di/types';
import { Container } from 'inversify';

// Interface imports begin
import IUserService from '../../src/service/user';
// Interface imports end

// Entity imports begin
import UserRepo from '../../src/repository/user';
import IIconService from '../../src/service/icon';
import IconRepo from '../../src/repository/icon';
// Entity imports end

const container = new Container();

container.bind<IUserService>(TYPES.UserRepo).to(UserRepo).inSingletonScope();
container.bind<IIconService>(TYPES.UserRepo).to(IconRepo).inSingletonScope();

export default container;