export interface Partner {
  id: number;
  urlName: string;
  organization: string;
  customerLocations: string;
  willWorkRemotely: boolean;
  website: string | null;
  services: string;
  offices: Office[];
}

export interface Office {
  location: string;
  address: string;
  coordinates: string;
}
