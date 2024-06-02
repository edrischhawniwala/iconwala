import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../di/types';
import IIconService from '../../service/icon';

import { StandardError, StandardSuccess } from '../../entity/standard-operation';
import { ControllerError, ControllerSuccess } from '../../core/controller/definition';
import { Icon } from '../../entity/icon';

@injectable()
export default class IconController implements IIconService {

  private service: IIconService;
  constructor(
    @inject(TYPES.IconRepo) service: IIconService
  ) {
    this.service = service;
  }

  public async create(icon: Icon) {
    return new Promise<StandardError | StandardSuccess>(async (resolve, reject) => {
      try {
        await this.checkIfNotExists(icon.id);
        this.service.create(icon)
          .then((success: StandardSuccess) => resolve(new ControllerSuccess(success.description)))
          .catch((error: StandardError) => reject(new ControllerError(error.description)));
      } catch (err) { reject(new ControllerError('icon already exists')); }
    });
  }

  public fetch(pageNumber: number = 1, pageSize: number = 10, q?: string) {
    return new Promise<StandardError | Icon[]>(async (resolve, reject) => {
      this.service.fetch(pageNumber, pageSize, q)
        .then((icons: StandardError | Icon[]) => {
          Array.isArray(icons) ?
            resolve(icons) : reject(new ControllerError('Failed to fetch icons'));
        })
        .catch((error: StandardError) => {
          reject(new ControllerError(error.description));
        });
    });
  }

  public fetchOne(id: string) {
    return new Promise<StandardError | Icon>(async (resolve, reject) => {
      this.service.fetchOne(id)
        .then((icon: StandardError | Icon) => {
          resolve(icon);
        })
        .catch((error: StandardError) => {
          reject(new ControllerError(error.description));
        });
    });
  }

  public update(icon: Icon) {
    return new Promise<StandardError | StandardSuccess>(async (resolve, reject) => {
      try {
        await this.checkIfExists(icon.id);
        this.service.update(icon)
          .then((success: StandardSuccess) => resolve(new ControllerSuccess(success.description)))
          .catch((error: StandardError) => reject(new ControllerError(error.description)));
      } catch (err) { reject(new ControllerError('Icon not found')); }
    });
  }

  public checkIfExists(code: string) { return this.service.checkIfExists(code); }

  public checkIfNotExists(code: string) { return this.service.checkIfNotExists(code); }

}