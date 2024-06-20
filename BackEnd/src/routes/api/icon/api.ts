import { Request, Response, NextFunction } from 'express';

import { container } from '../../../di';
import { TYPES } from '../../../di/types';
import IIconService from '../../../service/icon';

import { StandardError, StandardSuccess } from '../../../entity/standard-operation';
import { PayloadError } from '../../../error-handler/definition';
import { Icon } from '../../../entity/icon';

const controller: IIconService = container.get<IIconService>(TYPES.IconController);

function create(req: Request, res: Response, next: NextFunction) {
  const icon = new Icon(req.body);
  const payloadErr = icon.validateErrMsg();
  if (payloadErr.length > 0) {
    next(new PayloadError(payloadErr));
  } else {
    controller.create(icon)
      .then((success: StandardSuccess) => {
        res.send(success);
      })
      .catch((error: StandardError) => {
        res.status(500).send(error);
      });
  }
}

function fetchOne(req: Request, res: Response, next: NextFunction) {
  controller.fetchOne(req.params.id)
    .then((icon: StandardError | Icon) => {
      res.send(icon);
    })
    .catch((error: StandardError | Icon[]) => {
      res.status(500).send(error);
    });
}

function fetch(req: Request, res: Response, next: NextFunction) {
  controller.fetch(Number(req.query.pageNumber), Number(req.query.pageSize), req.query.query as string)
    .then((icons: StandardError | Icon[]) => {
      if (!Array.isArray(icons)) { icons = []; }
      res.send(icons);
    })
    .catch((error: StandardError | Icon[]) => {
      res.status(500).send(error);
    });
}

function update(req: Request, res: Response, next: NextFunction) {
  const icon = new Icon(req.body);
  const payloadErr = icon.validateErrMsg();
  if (payloadErr.length > 0) {
    next(new PayloadError(payloadErr));
  } else {
    controller.update(icon)
      .then((success: StandardSuccess) => {
        res.send(success);
      })
      .catch((error: StandardError) => {
        res.status(500).send(error);
      });
  }
}

export { create, fetch, fetchOne, update };