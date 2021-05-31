import { CommonRoutes } from '../../../common/common.routes';
import PartnersController from '../controllers/PartnersController';
import express from 'express';

export class PartnersRoutes extends CommonRoutes {
  constructor(app: express.Application) {
    super(app, 'PartnersRoutes');
  }

  configureRoutes() {
    this.app.route(`/partners`).get(PartnersController.listPartners);

    return this.app;
  }
}
