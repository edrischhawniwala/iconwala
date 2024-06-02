import 'reflect-metadata';
import { injectable, inject, id } from 'inversify';
import { TYPES } from '../../di/types';
import IRepository from '../../core/repository/definition';

import { Icon } from '../../entity/icon';

import { RepoError, RepoSuccess } from '../../core/repository/definition';

import IIconService from '../../service/icon';

@injectable()
export default class IconRepo implements IIconService {

  private repository: IRepository;
  constructor(
    @inject(TYPES.IRepository) repository: IRepository
  ) {
    this.repository = repository;
  }

  public create(icon: Icon) {
    return new Promise<RepoError | RepoSuccess>((resolve, reject) => {
      this.repository.insertOne('icon_mst', icon)
        .then(() => resolve(new RepoSuccess('icon Created!')))
        .catch(() => reject(new RepoError('Failed to create icon')));
    });
  }

//   public fetch() {
//     return new Promise<RepoError | Icon[]>((resolve, reject) => {
//       this.repository.readMany('icon_mst', {})
//         .then((arr: void | object[]) => {
//           const icons: Icon[] = [];
//           if (!Array.isArray(arr)) { arr = []; }
//           arr.forEach((icon) => {
//             icons.push(new Icon(icon));
//           });
//           resolve(icons);
//         })
//         .catch(() => reject(new RepoError('Failed to fetch icons')));
//     });
//   }

  public fetch(pageNumber: number = 1, pageSize: number = 10, query?: string) {
    return new Promise<RepoError | Icon[]>((resolve, reject) => {
      this.repository.readMany<Icon>('icon_mst', query ? {$or : [{name: query}, {tags: query}] } : {}, {limit: pageSize, skip: (pageNumber - 1)*pageSize})
        .then((arr: void | object[]) => {
          const icons: Icon[] = [];
          if (!Array.isArray(arr)) { arr = []; }
          arr.forEach((icon) => {
            icons.push(new Icon(icon));
          });
          resolve(icons);
        })
        .catch(() => reject(new RepoError('Failed to fetch icons')));
    });
  }

  public fetchOne(id: string) {
    return new Promise<RepoError | Icon>((resolve, reject) => {
      this.repository.readOne('icon_mst', { id })
        .then((icon: void | object) => {
          if (typeof icon !== 'object') { icon = {} as object; }
          resolve(new Icon(icon));
        })
        .catch(() => reject(new RepoError('Failed to find icon')));
    });
  }

  public update(icon: Icon) {
    return new Promise<RepoError | RepoSuccess>((resolve, reject) => {
      this.repository.updateOne('icon_mst', { id: icon.id }, icon)
        .then(() => resolve(new RepoSuccess('icon Updated!')))
        .catch(() => reject(new RepoError('Failed to update icon')));
    });
  }

  public checkIfExists(id: string) {
    return new Promise<void>((resolve, reject) => {
      this.repository.checkIfExists('icon_mst', { id })
        .then(() => resolve())
        .catch(() => reject());
    });
  }

  public checkIfNotExists(id: string) {
    return new Promise<void>((resolve, reject) => {
      this.repository.checkIfNotExists('icon_mst', { id })
        .then(() => resolve())
        .catch(() => reject());
    });
  }

}