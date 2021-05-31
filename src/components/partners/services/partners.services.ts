import PartnersDao from '../daos/partners.dao';
import { CRUD } from '../../../common/interfaces/crud.interface';
import { Partner } from '../interfaces/partners.interface';

class PartnersService implements CRUD {
  async list(): Promise<Partner[]> {
    return PartnersDao.getPartners();
  }
}

export default new PartnersService();
