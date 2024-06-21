import { Request, Response, NextFunction } from 'express';

import { container } from '../../../di';
import { TYPES } from '../../../di/types';
import IIconService from '../../../service/icon';

import { StandardError, StandardSuccess } from '../../../entity/standard-operation';
import { PayloadError } from '../../../error-handler/definition';
import { Icon } from '../../../entity/icon';
import axios from 'axios';

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

async function imageSearch(req: Request, res: Response, next: NextFunction) {

  const { image } = req.body;

  try {
      // Replace with the actual API call to a reverse image search service
      // Example using Google Cloud Vision (requires setting up and using an API key)
      const response = await axios.post(`https://vision.googleapis.com/v1/images:annotate?key=${process.env['YOUR_API_KEY']}`, {
          requests: [
              {
                  image: {
                      content: image.split(',')[1] // Remove the base64 prefix
                  },
                  features: [
                      {
                          type: 'WEB_DETECTION',
                          maxResults: 10
                      }
                  ]
              }
          ]
      });

      const results = response.data.responses[0].webDetection.webEntities.map((entity: { description: any; score: any; }) => ({
          title: entity.description,
          thumbnail: entity.score // Replace with actual thumbnail URL if available
      }));

      res.json(results); // comment this line and use this result to query our db
      
      controller.fetch(1, 10, results.title as string)
      .then((icons: StandardError | Icon[]) => {
        if (!Array.isArray(icons)) { icons = []; }
        res.send(icons);
      })
      .catch((error: StandardError | Icon[]) => {
        res.status(500).send(error);
      });
  } catch (error) {
      console.error("Error performing reverse image search:", error);
      res.status(500).send("Error performing reverse image search");
  }
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

export { create, fetch, imageSearch, fetchOne, update };