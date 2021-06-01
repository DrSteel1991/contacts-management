import PartnersDao from '../daos/partners.dao';
import { CRUD } from '../../../common/interfaces/crud.interface';
import { Partner, MatchedPartner } from '../interfaces/partners.interface';

const userCoordinates = {
  latitude: 51.5144636,
  longitude: -0.142571,
};

class PartnersService implements CRUD {
  async list(range: number) {
    const partners = await PartnersDao.getPartners();
    let availablePartners: MatchedPartner[] = [];
    partners.forEach((partner: Partner) => {
      partner.offices.forEach(office => {
        const coordinates = office.coordinates.split(',');
        const dist = this.getDistance(
          parseFloat(coordinates[0]),
          parseFloat(coordinates[1])
        );
        if (dist <= range) {
          availablePartners.push({
            urlName: partner.urlName,
            companyName: partner.organization,
            location: partner.offices,
          });
        }
      });
    });
    return availablePartners;
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
