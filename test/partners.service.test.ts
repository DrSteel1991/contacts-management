import partnerService from '../src/components/partners/services/partners.services';
import { expect } from 'chai';

describe('Calculate distance to Banbury, Oxfordshire', () => {
  it('it returns distance between two points', () => {
    const distance = partnerService.getDistance(
      52.0629009,
      -1.3397750000000315
    );
    expect(distance).to.be.eq(102.46576655871048);
  });
  it('it returns distance to St Saviours Wharf, London SE1 2BE', () => {
    const distance = partnerService.getDistance(
      51.5014767,
      -0.0713608999999451
    );
    expect(distance).to.be.eq(5.135546492130405);
  });
});
