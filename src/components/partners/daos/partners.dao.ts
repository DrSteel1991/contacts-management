import { Partner } from '../interfaces/partners.interface';
import debug from 'debug';
import { data } from '../../../common/partners';

const log: debug.IDebugger = debug('app:in-memory-dao');

class PartnersDao {
  partners: Partner[] = data;

  constructor() {}

  async getPartners() {
    return this.partners;
  }
}

export default new PartnersDao();
