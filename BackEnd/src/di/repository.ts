import { TYPES } from './types';
import { Container } from 'inversify';

// Interface imports begin
import IUserService from '../service/user';
import IIconService from '../service/icon';
// Interface imports end

// Entity imports begin
import UserRepo from '../repository/user';
import IconRepo from '../repository/icon';
// Entity imports end

const container = new Container();

container.bind<IUserService>(TYPES.UserRepo).to(UserRepo).inSingletonScope();
container.bind<IIconService>(TYPES.IconRepo).to(IconRepo).inSingletonScope();

export default container;