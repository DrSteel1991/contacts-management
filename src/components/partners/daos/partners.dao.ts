import { Partner } from '../interfaces/partners.interface';
import debug from 'debug';
import * as data from '../../../common/partners.json';

const log: debug.IDebugger = debug('app:in-memory-dao');

class PartnersDao {
  partners: Partner[] = data;

  constructor() {}

  async getPartners() {
    return this.partners;
  }
}

export default new PartnersDao();
