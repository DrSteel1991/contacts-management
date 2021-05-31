import PartnersService from '../partners.services';
import * as data from '../../../common/partners.json';

describe('auth', () => {
  it('should resolve with true and valid userId for hardcoded token', async () => {
    const response = await PartnersService.list();
    expect(response).toEqual(data);
  });
});
