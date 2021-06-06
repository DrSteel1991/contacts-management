import express from 'express';
import partnerService from '../services/partners.services';
import debug from 'debug';

const log: debug.IDebugger = debug('app:partners-controller');

class PartnersController {
  async listPartners(req: express.Request, res: express.Response) {
    try {
      const partners = await partnerService.list(parseInt(req.params.range));
      res.status(200).send({ error: null, data: partners });
    } catch (err) {
      res.status(500).send({ error: 1, data: [] });
    }
  }
}

export default new PartnersController();
