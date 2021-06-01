import express from 'express';
import partnerService from '../services/partners.services';
import debug from 'debug';

const log: debug.IDebugger = debug('app:partners-controller');

class PartnersController {
  async listPartners(req: express.Request, res: express.Response) {
    const partners = await partnerService.list(parseInt(req.params.range));
    res.status(200).send(partners);
  }
}

export default new PartnersController();
