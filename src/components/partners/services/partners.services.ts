import PartnersDao from '../daos/partners.dao';
import { CRUD } from '../../../common/interfaces/crud.interface';
import { Partner, Office } from '../interfaces/partners.interface';

const userCoordinates = {
  latitude: 51.5144636,
  longitude: -0.142571,
};

class PartnersService implements CRUD {
  async list(range: number) {
    const partners = await PartnersDao.getPartners();
    return partners
      .map((partner: Partner) => ({
        ...partner,
        offices: partner.offices
          .map((office: Office) => ({
            ...office,
            dist: this.getDistance(
              parseFloat(office.coordinates.split(',')[0]),
              parseFloat(office.coordinates.split(',')[1])
            ),
            coordinates: office.coordinates.split(','),
          }))
          .filter(res => res.dist <= range),
      }))
      .filter(partner => partner.offices.length)
      .sort((a, b) => (a.organization < b.organization ? -1 : 1));
  }

  getDistance(lat2: number, lon2: number): number {
    let lat1 = userCoordinates.latitude;
    let lon1 = userCoordinates.longitude;
    var R = 6371; // km
    var dLat = this.toRad(lat2 - lat1);
    var dLon = this.toRad(lon2 - lon1);
    lat1 = this.toRad(lat1);
    lat2 = this.toRad(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  toRad(Value: number) {
    return (Value * Math.PI) / 180;
  }
}

export default new PartnersService();
