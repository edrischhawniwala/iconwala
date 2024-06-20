import { Icon } from '../../entity/icon';
import { StandardError, StandardSuccess } from '../../entity/standard-operation';

export default interface IIconService {

  create: (Icon: Icon) => Promise<StandardError | StandardSuccess>;
  fetch: (pageNumber: number, pageSize: number, query?: string) => Promise<StandardError | Icon[]>;
  fetchOne: (code: string) => Promise<StandardError | Icon>;
  update: (Icon: Icon) => Promise<StandardError | StandardSuccess>;
  checkIfExists: (code: string) => Promise<void>;
  checkIfNotExists: (code: string) => Promise<void>;

}