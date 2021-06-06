import { expect } from 'chai';
import app from '../src/index';
import { agent as request } from 'supertest';

describe('Partners Api', () => {
  describe('GET /partners/:range', () => {
    it('It should GET Partners by range', async () => {
      const res = await request(app).get('/partners/10');
      expect(res.status).to.equal(200);
      expect(res.body).not.to.be.empty;
      expect(res.body.data).not.to.be.empty;
      expect(res.body.data).to.be.an('array');
      expect(res.body.data.length).to.be.eq(2);
      expect(res.body.error).to.be.null;
    });
  });
});

describe('Partners Api', () => {
  describe('GET /partners/:range', () => {
    it('It should GET Partners by range', async () => {
      const res = await request(app).get('/partners/5000');
      expect(res.status).to.equal(200);
      expect(res.body).not.to.be.empty;
      expect(res.body.data).not.to.be.empty;
      expect(res.body.data).to.be.an('array');
      expect(res.body.data.length).to.be.eq(6);
      expect(res.body.error).to.be.null;
    });
  });
});
